<script lang="ts">
	import Icon from "@iconify/svelte";
	import { slide } from "svelte/transition";
	export let isOpen: boolean;
	export let head: string;
	export let body: string;
	export let onPress;
</script>

<div class="faq">
	<div class="head" on:click={onPress}>
		<h2>
			{head}
		</h2>
		<div class="chevron_icon" aria-expanded={isOpen}>
			<Icon width="28px" icon="ci:chevron-big-down" />
		</div>
	</div>
	{#if isOpen}
		<div class="body" transition:slide={{ duration: 300 }}>
			<p>{@html body}</p>
		</div>
	{/if}
</div>

<style>
	.faq {
		cursor: pointer;
		background-color: #fafafa;
		border-radius: 20px;
		color: #333;
		padding: 16px 24px;
		box-shadow: 4px 4px 40px 5px rgba(0, 0, 0, 0.2);
	}
	.chevron_icon {
		transition: 300ms;
		height: fit-content;
	}
	[aria-expanded="true"].chevron_icon {
		transform: rotate(0.5turn);
	}
	.head {
		user-select: none;
		display: flex;
		gap: 8px;
		align-items: center;
		justify-content: space-between;
	}
	.head h2 {
		font-family: var(--sans-serif);
	}
	.body {
		padding-top: 8px;
	}

	@media screen and (max-width: 640px) {
		.faq {
			padding: 12px 16px;
		}
		.head {
			font-size: 75%;
		}
	}
</style>
