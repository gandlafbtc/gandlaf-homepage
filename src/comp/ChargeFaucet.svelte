<script>
	import { onMount } from "svelte";


	let token = '';
	let message = '';
    let balance = 0
    let mintCount = 0

	onMount(async ()=>{
		const response = await fetch('https://anarchy.gandlaf.com/balance');
		const data = await response.json();
		balance = data.remaining
        mintCount = data.mintCount

	})
	const send = async () => {
		const response = await fetch('https://anarchy.gandlaf.com/charge?token=' + token);
		const m = await response.json();
		message = m.message;
		token = '';
        const r = await fetch('https://anarchy.gandlaf.com/balance');
		const data = await r.json();
		balance = data.remaining
        mintCount = data.mintCount
	};
</script>

<div class="card w-96 h-64 bg-base-100 shadow-xl">
	<div class="card-body flex flex-col items-center">
		<p class="text-lg font-bold">Hodls: {balance} sats from {mintCount} mints</p>
		{#if message}
			<p class="text-info">
				{message}
			</p>
		{:else}
			<p class="text-info">
				This is anarchy! charge the faucet, with any cashu token. Beware, your token you paste here
				will be immediately invalidated and claimed by the faucet. The only way to get them back is
				by waiting.
			</p>
		{/if}

		<div class="flex gap-2">
			<input id="token-input" type="text" bind:value={token} class="input input-primary" placeholder="paste token here" />
			{#if token}
				<button on:click={send} class="btn btn-square ">
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
							d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
						/>
					</svg>
				</button>
			{/if}
		</div>
	</div>
</div>
