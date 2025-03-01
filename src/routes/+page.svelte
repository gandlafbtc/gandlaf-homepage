<script>
	import Donate from "$lib/comp/Donate.svelte";
	import Profile from "$lib/comp/Profile.svelte";
	import Projects from "$lib/comp/Projects.svelte";
	import Writing from "$lib/comp/Writing.svelte";

</script>
<div class="flex p-2 gap-2 flex-col xl:flex-row">
    <div class="order-2 xl:order-1 w-full xl:w-1/3">
        <Projects></Projects>
    </div>
    <div class="order-1 xl:order-2 w-full xl:w-1/3 flex flex-col gap-2">
        <div>
            <Profile></Profile>
        </div>
    </div>
    <div class="order-3 w-full xl:w-1/3">
        <Writing></Writing>
    </div>

</div>