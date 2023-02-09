<script lang="ts">
	import '../app.postcss';
	import "../app.css";
	import Footer from '../comp/Footer.svelte';
	import Header from '../comp/Header.svelte';
</script>

<div class="w-full h-full flex-col flex">
	<Header></Header>
	<div class="min-h-screen">
		<slot />
	</div>
	<Footer></Footer>
</div>
