<script lang="ts">
	import faq_data from "../assets/faqs.json";
	import Accordion from "./accordion.svelte";

	let active_accordion = 0;
	const expandAccordion = (id: number) => {
		if (active_accordion == id) return (active_accordion = -1);
		return (active_accordion = id);
	};
</script>

<section id="faqs">
	<div class="container" style="max-width: 980px;">
		<h1
			style="margin-bottom: 64px; text-align: center; text-decoration: underline wavy var(--purple-200); text-underline-offset: 0.24em;"
		>
			faqs
		</h1>
		<div class="flex flex-col" style="gap: 12px;">
			{#each faq_data as faq, i}
				<Accordion
					isOpen={i === active_accordion}
					head={faq.question}
					body={faq.answer}
					onPress={() => expandAccordion(i)}
				/>
			{/each}
		</div>
	</div>
</section>

<style>
	#faqs {
		padding: 2.4em 0;
		background-color: var(--pink-300);
		border-radius: 40px;
	}
</style>
