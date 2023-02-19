<script>
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import ChargeFaucet from '../../../comp/ChargeFaucet.svelte';

	let token = 'click refresh to check the faucet...';
	let foundToken = false;
	let isLoading = false;
	

	const refreshToken = async () => {
		foundToken = false;
		isLoading = true;
		try {
			const response = await fetch('https://anarchy.gandlaf.com/');
			const data = await response.json();
			if (!data?.token) {
				token = 'woah slow down...';
				return;
			} else {
				token = data.token;
				if (!token.startsWith('Token has')) {
					foundToken = true;
				}
			}
		} catch (error) {
			token = "couldn't contact faucet";
		} finally {
			isLoading = false;
		}
	};
	const copyToken = () => {
		if (browser) {
			let input = document.getElementById('token-input');
			// @ts-expect-error
			input.select();
			document.execCommand('copy');
		}
	};

</script>

<div class="w-full h-screen flex flex-col justify-center items-center gap-4">
	<div class="card w-96 h-64 bg-base-100 shadow-xl">
		<div class="card-body flex flex-col items-center">
			<p class="text-lg font-bold">Cashu Faucet</p>
			<p class="text-lg font-bold"></p>
			<p class="h-10 text-info">
				{#if foundToken}
					<span
						>Found token! add it to your Cashu wallet or redeem at <a
							href="https://redeem.cashu.me"
							class="link link-primary">redeem.cashu.me</a
						></span
					>
				{/if}
			</p>
			{#if isLoading}
				<button class="btn btn-disabled btn-square loading" />
			{:else}
				<!-- else content here -->
				<button class="btn btn-primary btn-square" on:click={refreshToken}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-6 h-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
						/>
					</svg>
				</button>
			{/if}

			<div class="flex gap-2">
				<input
					id="token-input"
					type="text"
					bind:value={token}
					readonly
					class="input input-primary"
				/>
				{#if foundToken}
					<button on:click={copyToken} class="btn btn-square ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-6 h-6"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
							/>
						</svg>
					</button>
				{/if}
			</div>
		</div>
	</div>

	<ChargeFaucet></ChargeFaucet>

</div>
