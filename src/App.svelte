<script lang="ts">
	import Icon from "@iconify/svelte";
	import About from "./lib/about.svelte";
	import FAQs from "./lib/faqs.svelte";
	import Footer from "./lib/footer.svelte";

	import Home from "./lib/home.svelte";
	import Sponsors from "./lib/sponsors.svelte";

	let data = fetch(
		"https://api.instantwebtools.net/v1/passenger?page=0&size=10"
	)
		.then(r => r.json().then(res => res.data))
		.catch(err => {
			console.log(err);
			return [];
		});
</script>

<svelte:head>
	<script defer async src="https://apply.devfolio.co/v2/sdk.js"></script>
</svelte:head>

<Home />
<About />
<Sponsors />
<FAQs />
<Footer />
