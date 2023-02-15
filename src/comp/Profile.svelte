<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	let isLoading = true;
	const stars = tweened(0, {
		duration: 1200,
		easing: cubicOut
	});

	const followers = tweened(0, {
		duration: 1200,
		easing: cubicOut
	});

	const stack = tweened(0, {
		duration: 1200,
		easing: cubicOut
	});

	const spent = tweened(0, {
		duration: 1200,
		easing: cubicOut
	});

	const rep = tweened(0, {
		duration: 1200,
		easing: cubicOut
	});

	onMount(async () => {
        
		const res = await fetch('/api/profile',{headers:{"Cache-Control":'public, max-age=240', 'pragma':''}});
		const data = await res.json();
		isLoading = false;
		stars.set(data.ghStars);
		followers.set(data.ghFollowers);
		stack.set(data.snStacked);
		spent.set(data.snSpent);
		rep.set(data.soReputation);
	});
</script>

<div class="w-full h-full flex items-center justify-center text-gray-100">
	<div class="card w-full bg-base-300">
		<div class="flex flex-col gap-2 items-center">
			<figure class="m-2">
				<div class="avatar m-2">
					<div class="w-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
						<img src="/gandlaf.webp" alt="gandlaf21" />
					</div>
				</div>
			</figure>
			<p class="font-bold text-lg">@gandlaf21 
                {#if isLoading}
                <button class="btn btn-square loading btn-xs" />
                {/if}
            </p>
		</div>
		<div class="card-body bg-base-200 rounded-2xl mt-2">
			<div class="flex-col gap-3">
				<div class="grid grid-cols-2 items-center gap-1">
					<p class="font-bold">GitHub</p>
					<a href="https://github.com/gandlafbtc" class="link font-bold">@gandlafbtc</a>
					<p>Stars</p>
					<p class="inline-flex items-center text-warning gap-1">
						{Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 0 }).format(
							$stars
						)}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							class="w-5 h-5"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
							/>
						</svg>
					</p>
					<p>Followers</p>
					<p class="inline-flex items-center text-warning gap-1">
						{Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 0 }).format(
							$followers
						)}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-5 h-5"
						>
							<path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
							<path
								fill-rule="evenodd"
								d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
								clip-rule="evenodd"
							/>
						</svg>
					</p>
					<div class="divider col-span-2 my-1" />
					<p class="font-bold">stacker.news</p>
					<a href="https://stacker.news/gandlaf21" class="link font-bold">@gandlaf21</a>
					<p>Stacked</p>
					<p class="inline-flex items-center text-accent gap-1">
						{Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1,minimumFractionDigits:1 }).format(
							$stack
						)}
						<svg
							class="w-4 h-4"
							stroke="currentColor"
							fill="currentColor"
							id="Layer_1"
							data-name="Layer 1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 360 360"
							><rect x="166.06" y="2.83" width="27.89" height="47.65" /><rect
								x="166.06"
								y="310.35"
								width="27.89"
								height="47.65"
							/><rect
								x="166.06"
								y="6.84"
								width="27.89"
								height="198.86"
								transform="translate(286.28 -73.74) rotate(90)"
							/><rect
								x="166.06"
								y="80.5"
								width="27.89"
								height="198.86"
								transform="translate(359.94 -0.08) rotate(90)"
							/><rect
								x="166.06"
								y="152.08"
								width="27.89"
								height="198.86"
								transform="translate(431.52 71.5) rotate(90)"
							/></svg
						>
					</p>
					<p>Spent</p>
					<p class="inline-flex items-center text-accent gap-1">
						{Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1, minimumFractionDigits:1 }).format(
							$spent
						)}
						<svg
							class="w-4 h-4"
							stroke="currentColor"
							fill="currentColor"
							id="Layer_1"
							data-name="Layer 1"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 360 360"
							><rect x="166.06" y="2.83" width="27.89" height="47.65" /><rect
								x="166.06"
								y="310.35"
								width="27.89"
								height="47.65"
							/><rect
								x="166.06"
								y="6.84"
								width="27.89"
								height="198.86"
								transform="translate(286.28 -73.74) rotate(90)"
							/><rect
								x="166.06"
								y="80.5"
								width="27.89"
								height="198.86"
								transform="translate(359.94 -0.08) rotate(90)"
							/><rect
								x="166.06"
								y="152.08"
								width="27.89"
								height="198.86"
								transform="translate(431.52 71.5) rotate(90)"
							/></svg
						>
					</p>
					<div class="divider col-span-2 my-1" />
					<p class="font-bold">Stackoverflow</p>
					<a href="https://stackoverflow.com/users/15961987" class="link font-bold">@GD21</a>
					<p>Reputation</p>
					<p class="inline-flex items-center text-error gap-1">
						{Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 0 }).format(
							$rep
						)}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							class="w-5 h-5"
						>
							<path
								fill-rule="evenodd"
								d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z"
								clip-rule="evenodd"
							/>
						</svg>
					</p>
					<div class="divider col-span-2 my-1" />
				</div>
			</div>
		</div>
	</div>
</div>
