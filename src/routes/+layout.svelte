<script lang="ts">
	import Footer from '$lib/comp/Footer.svelte';
	import Header from '$lib/comp/Header.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<Header></Header>
<div class="min-h-screen">
  {@render children()}
</div>
<Footer></Footer>
