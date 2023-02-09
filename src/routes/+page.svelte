<script>
	import Profile from "../comp/Profile.svelte";
	import Projects from "../comp/Projects.svelte";
	import Writing from "../comp/Writing.svelte";

</script>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-2 m-2">
  <div class="order-2 lg:order-1 justify-self-center">
    <Projects></Projects>
  </div>
  <div class="order-1 lg:order-2">
    <Profile></Profile>
  </div>
  <div class="order-3 justify-self-center">
    <Writing>

    </Writing>
  </div>

</div>