<script lang="ts">
	import Icon from "@iconify/svelte";
	import About from "./lib/about.svelte";
	import FAQs from "./lib/faqs.svelte";
	import Footer from "./lib/footer.svelte";

	import Home from "./lib/home.svelte";
	import Sponsors from "./lib/sponsors.svelte";
</script>

<svelte:head>
	<script defer async src="https://apply.devfolio.co/v2/sdk.js"></script>
</svelte:head>

<Home />
<About />
<Sponsors />
<FAQs />
<Footer />
