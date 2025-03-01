<script>
	import { Heart } from "lucide-svelte";
	import Donate from "./Donate.svelte";

	let showDonate = $state(false)
</script>

<div class="w-full h-full flex items-center justify-center text-gray-100">
	<div class="card w-full bg-base-300">
		<div class="absolute right-0 w-44 h-44 overflow-hidden">
			<a href="https://lncal.com/gandlaf21" target="_blank" rel="noreferrer">
				<div  class="opacity-75 hover:opacity-100 border-dashed border-warning border-2 p-0.5 text-warning-content absolute right-0 origin-top mt-12 mr-12 w-64 text-center overflow-hidden rotate-45 translate-x-32"  >
					<div class="bg-base-300 p-1">
						<div class="bg-warning p-1">
							<div class="font-bold border-error border-2">Book my time!</div>
						</div>
					</div>
				</div>
			</a>
		</div>
		<div class="flex flex-col gap-2 items-center">
			<figure class="m-2">
				<div class="avatar m-2">
					<div class="w-44 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
						<img src="/gandlaf.webp" alt="gandlaf21" />
					</div>
				</div>
			</figure>
			<p class="font-bold text-lg">@gandlaf21 
            </p>
		</div>
		<div class="card-body bg-base-200 rounded-lg mt-2">
			<div class="flex-col gap-3">
				<div class="grid grid-cols-2 items-center gap-1">
					<p class="font-bold">GitHub</p>
					<a href="https://github.com/gandlafbtc" class="link font-bold">@gandlafbtc</a>
					
					<div class="divider col-span-2 my-1" />
					<p class="font-bold">stacker.news</p>
					<a href="https://stacker.news/gandlaf21" class="link font-bold">@gandlaf21</a>
					
					<div class="divider col-span-2 my-1" />
					<p class="font-bold">Stackoverflow</p>
					<a href="https://stackoverflow.com/users/15961987" class="link font-bold">@GD21</a>
					
					<div class="divider col-span-2 my-1" />
				</div>
			</div>
			<div>
				{#if showDonate}
				<Donate></Donate>
				  
				{:else}
				<button class="btn btn-primary w-full" onclick={()=> showDonate=true}>
					<Heart></Heart>
					Support me!
				</button>				  
				{/if}
			</div>
		</div>
	</div>
</div>
