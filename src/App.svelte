<script lang="ts">
	import Home from "./components/home.svelte";
	import Sponsors from "./components/sponsors.svelte";
</script>

<svelte:head>
	<script defer async src="https://apply.devfolio.co/v2/sdk.js"></script>
</svelte:head>

<Home />
<Sponsors />
<footer>
	<div class="container">
		<div class="flex justify-between items-center">
			<div>
				© 2022, <a
					href="https://www.hackclubsvit.co"
					target="_blank"
					rel="noopener noreferrer"
				>
					Hack Club SVIT</a
				>. All rights reserved. &bull;
				<a
					href="https://devfolio.co/code-of-conduct"
					target="_blank"
					rel="noopener noreferrer">Code of Conduct</a
				>
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		width: 100%;
		padding: 24px 0;
	}
</style>
