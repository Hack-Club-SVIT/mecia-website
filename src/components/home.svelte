<script lang="ts">
	import typographyLogo from "../assets/logo_typo.svg";
	import meciaMono from "../assets/logo_mono.svg";
	import hcsLogo from "../assets/hcs_logo.svg";
	import Icon from "@iconify/svelte";
</script>

<div id="home">
	<header>
		<img width="48px" src={meciaMono} alt="MECIA Hacks logo" />
		<img width="48px" src={hcsLogo} alt="Hack Club SVIT logo" />
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
			<Icon width="28" icon="carbon:calendar" />
			22 - 24 sept '22
		</div>
		<div class="icon_text_pair">
			<Icon width="28" icon="carbon:location" />
			SVIT, Vasad
		</div>
	</main>
	<div class="pulsating_gradient" />
</div>

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
		font-weight: 00;
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
</style>
