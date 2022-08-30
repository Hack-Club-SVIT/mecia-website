<script lang="ts">
	import typographyLogo from "./assets/logo_typo.svg";
	import meciaMono from "./assets/logo_mono.svg";
	import hcsLogo from "./assets/hcs_logo.svg";
	import devfolio from "./assets/devfolio.svg";
	import polygon from "./assets/polygon.svg";
	import filecoin from "./assets/filecoin.svg";
	import solana from "./assets/solana.svg";
	import replit from "./assets/replit.svg";
	import Icon from "@iconify/svelte";

	let sponsors = ["devfolio", "polygon", "filecoin", "solana", "replit"];
</script>

<svelte:head>
	<script defer async src="https://apply.devfolio.co/v2/sdk.js"></script>
</svelte:head>
<div id="home">
	<header>
		<img width="60px" src={meciaMono} alt="MECIA Hacks logo" />
		<img src={hcsLogo} alt="Hack Club SVIT logo" />
		<!-- <img width="80" class="svit_logo" src="/svit_logo.png" alt="" /> -->
	</header>
	<main class="hero">
		<img class="typo_logo" src={typographyLogo} alt="MECIA Hacks logo" />
		<p class="subtext">an in-person multidisciplinary hackathon</p>
		<div
			class="apply-button"
			data-hackathon-slug="hacksvit2022"
			data-button-theme="dark-inverted"
			style="height: 44px; width: 312px"
		/>
		<div class="icon_text_set">
			<Icon width="24" icon="carbon:location" />
			SVIT, Vasad
		</div>
	</main>
</div>
<section id="sponsors">
	<div class="container">
		<h1 style="margin-bottom: 64px;">Sponsors</h1>
		<div class="sponsor_grid">
			{#each sponsors as sponsor}
				<!-- svelte-ignore missing-declaration -->
				<img class="sponsor_img" src={eval(sponsor)} alt="" />
			{/each}
		</div>
	</div>
</section>

<style>
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
	}
	#home {
		display: flex;
		flex-direction: column;
		gap: 20vh;
		align-items: center;
		width: 100%;
		padding: 1.8em 1em;
		min-height: 100vh;
	}
	.hero {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 24px;
	}
	.typo_logo {
		width: 90%;
		max-width: 32em;
	}
	.subtext {
		font-family: var(--sans-serif);
		max-width: 640px;
		text-align: center;
		font-size: 120%;
	}
	.icon_text_set {
		font-family: var(--sans-serif);
		display: flex;
		align-items: center;
		gap: 12px;
		font-size: 120%;
		max-width: 240px;
		text-align: center;
	}
	#sponsors {
		padding: 2.4em;
		text-align: center;
		background-color: #16062d;
	}
	.sponsor_grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		place-items: center;
		row-gap: 48px;
		column-gap: 24px;
	}
	.sponsor_img {
		width: 260px;
	}
</style>
