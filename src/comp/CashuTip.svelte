<script lang="ts">
	import { browser } from '$app/environment';
	import { CashuMint, CashuWallet, getDecodedProofs } from '@gandlaf21/cashu-ts';
	import { requestInvoice } from 'lnurl-pay/dist/umd/index';

	export let lnaddress: String;
	let amount = 0;
	let token = '';
	let cashuDonos = [];
	let isPrepared = false;
	let isFinished = false;
	let isSending = false;
	let message = '';

	const handleCancel = () => {
		amount = 0;
		token = '';
		cashuDonos = [];
		isPrepared = false;
		isFinished = false;
		isSending = false;
		message = '';
	};

	const handleSend = async () => {
		if (browser) {
			isSending = true;
			const failedMints = [];
			isSending = true;
			for (let index = 0; index < cashuDonos.length; index++) {
				const dono = cashuDonos[index];
				console.log(dono);
				message = 'paying invoices...';
				try {
					const { isPaid, preimage } = await dono.wallet.payLnInvoice(dono.invoice, dono.proofs);
					if (!isPaid) {
						failedMints.push(dono.wallet.mint.mintUrl);
						message =
							'Mints' + failedMints?.join(', ') + 'reported a failure when paying the invoice';
					}
				} catch (e) {
					console.log(e);
					failedMints.push(dono.wallet.mint.mintUrl);
					message =
						'Mints' + failedMints?.join(', ') + ' reported a failure when paying the invoice';
				}
			}
			if (failedMints.length < 1) {
				message = 'Done! Thanks for the donation.';
			}
			isFinished = true;
		}
	};

	const validateToken = () => {
		if (browser) {
			if (!token) {
				return;
			}
			const parsedTokens = getDecodedProofs(token);
			if (!parsedTokens.mints || !parsedTokens.proofs) {
				return;
			}

			parsedTokens?.mints?.forEach(async (mint) => {
				const cashuMint = new CashuMint(mint.url);
				try {
					amount = 0;
					const proofsForMint = parsedTokens.proofs.filter((p) => mint.keysets.includes(p.id));
					if (!proofsForMint) {
						return;
					}
					message = 'contacting Mint...';
					const keys = await cashuMint.getKeys();
					const cashuWallet = new CashuWallet(keys, cashuMint);
					message = 'Verifying Proofs...';
					const spentProofs = await cashuWallet.checkProofsSpent(proofsForMint);
					const unspentProofs = proofsForMint.filter((p) => !spentProofs.includes(p));
					const donoAmount = unspentProofs.reduce((acc, p) => acc + p.amount, 0);
					message = 'Requesting Invoices...';
					const { invoice, params, successAction, validatePreimage } = await requestInvoice({
						lnUrlOrAddress: lnaddress,
						tokens: Math.floor(donoAmount * 0.98) - 1
					});
					const recomendedFees = await cashuWallet.getFee(invoice);
					const donoFees = Math.floor(donoAmount * 0.02) + 2;
					const donoInvoice = invoice;
					cashuDonos.push({
						wallet: cashuWallet,
						proofs: unspentProofs,
						fees: donoFees,
						invoice: donoInvoice
					});
					isPrepared = true;
				} catch (e) {
					console.error(e);
				}
			});
		}
	};
</script>

<div class="card bg-base-100 shadow-xl h-72 w-96 z-50 absolute">
	<div class="card-body h-full">
		<h2 class="card-title">Donate with Cashu</h2>

		{#if isFinished}
			<div>
				<p>{message}</p>
			</div>
			<div class="card-actions justify-end items-end">
				<button class="btn btn-success btn-sm" on:click={handleCancel}>OK</button>
			</div>
		{:else if isSending}
			<div>
				<p>{message}</p>
			</div>
		{:else}
			<!-- else content here -->
			{#if isPrepared}
				<div class="flex flex-col items-center justify-center gap-4 h-full">
					{#each cashuDonos as dono}
						<div class="bg-base-300 rounded-lg p-2 flex-col gap-2">
							<p class="text-xs badge-info rounded-lg p-1">
								Mint: {dono.wallet.mint.mintUrl}
							</p>
							<p class="inline-flex gap-2 items-center">
								Amount: {dono.proofs.reduce((akk, p) => akk + p.amount, 0)} satoshi
								<span class="text-xs badge">- {dono.fees} fees</span>
							</p>
						</div>
					{/each}
				</div>
				<div class="card-actions justify-end items-end">
					<button class="btn btn-outline btn-sm" on:click={handleCancel}>cancel</button>
					<button class="btn btn-success btn-sm" on:click={handleSend}>Confirm</button>
				</div>
			{:else if message}
				<div>
					<p>{message}</p>
				</div>
			{:else}
				<div class="flex flex-col items-center justify-center gap-2 h-full">
					<div>
						<p>Paste a Cashu token</p>
						<input
							type="text"
							bind:value={token}
							on:input={validateToken}
							class="input input-primary"
						/>
					</div>
				</div>
			{/if}
		{/if}
	</div>
</div>
