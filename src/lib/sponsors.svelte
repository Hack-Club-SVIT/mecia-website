<script lang="ts">
	import devfolio from "../assets/devfolio.svg";
	import polygon from "../assets/polygon.svg";
	import filecoin from "../assets/filecoin.svg";
	import solana from "../assets/solana.svg";
	import replit from "../assets/replit.svg";
	let sponsors = {
		diamond: [
			[devfolio, "https://devfolio.co/"],
			[polygon, "https://polygon.technology/"],
		],
		platinum: [
			[filecoin, "https://filecoin.io/"],
			[replit, "https://replit.com/"],
			[solana, "https://solana.com/"],
		],
	};
</script>

<section id="sponsors">
	<div class="container">
		<h1
			style="margin-bottom: 64px; text-decoration: underline wavy var(--pink-200); text-underline-offset: 0.24em;"
		>
			sponsors
		</h1>
		{#each Object.keys(sponsors) as type}
			<h2 style="margin-top: 20px; margin-bottom: 36px; color: #FFFFFF99">
				#{type}
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

<style>
	#sponsors {
		padding: 2.4em 0;
		/* background-color: var(--pink-300); */
		/* border-radius: 40px; */
	}
	.sponsor_grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
		align-items: center;
		row-gap: 48px;
		column-gap: 24px;
	}
	.sponsor_img {
		width: 240px;
	}

	@media screen and (max-width: 1240px) {
		#sponsors {
			text-align: center;
		}
		.sponsor_grid {
			place-items: center;
		}
	}
</style>
