<script>
	import CashuTip from "../../comp/CashuTip.svelte";
    import LnTip from "../../comp/LNTip.svelte";
    let isCashu = false 
</script>
<div class="flex flex-col w-full items-center justify-center pt-5 gap-2">
    <h1 class="font-bold text-xl">
        Support @gandlaf21
    </h1>
    <div class="flex gap-1">
        use Cashu: 
        <input type="checkbox" class="toggle toggle-primary" bind:checked={isCashu} />

    </div>
    <div class="flex justify-center">
        {#if isCashu}
            <CashuTip lnaddress="0x0dd4e7be973f16a9@ln.tips"></CashuTip>
        {:else}
        <div>
            <LnTip lnaddress="gandlaf21@stacker.news"></LnTip>
        </div>
        {/if}
    </div>
        
</div>