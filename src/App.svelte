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

	let sponsors = {
		Diamond: [
			[devfolio, "https://devfolio.co/"],
			[polygon, "https://polygon.technology/"],
		],
		Platinum: [
			[filecoin, "https://filecoin.io/"],
			[solana, "https://solana.com/"],
			[replit, "https://replit.com/"],
		],
	};
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
			data-hackathon-slug="mecia-hacks"
			data-button-theme="dark-inverted"
			style="height: 44px; width: 312px"
		/>
		<div class="icon_text_pair">
			<Icon width="24" icon="carbon:calendar" />
			22 - 24 Sept '22
		</div>
		<div class="icon_text_pair">
			<Icon width="24" icon="carbon:location" />
			SVIT, Vasad
		</div>
	</main>
	<div class="pulsating_gradient" />
</div>
<section id="sponsors">
	<div class="container">
		<h1 style="margin-bottom: 54px;">Sponsors</h1>
		{#each Object.keys(sponsors) as type}
			<h2 style="margin-top: 20px; margin-bottom: 36px; color: #FFFFFF99">
				{type}
			</h2>
			<div class="sponsor_grid">
				{#each sponsors[type] as sponsor}
					<a
						href={sponsor[1]}
						target="_blank"
						rel="noopener noreferrer"
					>
						<img class="sponsor_img" src={sponsor[0]} alt="" />
					</a>
				{/each}
			</div>
		{/each}
	</div>
</section>
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
	header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 0 1em;
	}
	#home {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		padding: 1.8em 0 0;
		height: 100vh;
	}
	.hero {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 24px;
	}
	.typo_logo {
		width: 85%;
		max-width: 32em;
	}
	.subtext {
		font-family: var(--sans-serif);
		max-width: 640px;
		text-align: center;
		font-size: 120%;
	}
	.icon_text_pair {
		font-family: var(--sans-serif);
		display: flex;
		align-items: center;
		gap: 12px;
		font-size: 120%;
		max-width: 240px;
		text-align: center;
		user-select: none;
		cursor: pointer;
	}
	.pulsating_gradient {
		background: linear-gradient(transparent, #16062dee);
		width: 100%;
		height: 180px;
		animation: pulsate 3.6s;
		animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		animation-iteration-count: infinite;
		animation-duration: alternate;
		animation-fill-mode: both;
	}
	#sponsors {
		padding: 2.4em 0;
		text-align: center;
		background-color: #16062d;
	}
	.sponsor_grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		place-items: center;
		row-gap: 48px;
		column-gap: 24px;
	}
	.sponsor_img {
		width: 240px;
	}
	footer {
		width: 100%;
		padding: 24px 0;
	}
</style>
