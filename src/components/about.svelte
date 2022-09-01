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

<section id="about">
	<div class="container">
		<h1 style="margin-bottom: 24px;">what is MECIA hacks</h1>
		<p>
			MECIA Hacks is an in-person, multidisciplinary hackathon being
			organized at Sardar Vallabhbhai Patel Institute of Technology(SVIT),
			Vasad. Our aim is to invoke a sense of collaboration among various
			branches of engineering.
		</p>
		<div class="numbers">
			<div class="flex flex-col">
				<h1>24</h1>
				<p>hours</p>
			</div>
			<div class="flex flex-col">
				<h1>8</h1>
				<p>departments</p>
			</div>
			<div class="flex flex-col">
				<h1>30+</h1>
				<p>problem statements</p>
			</div>
		</div>
	</div>
</section>

<style>
	#about {
		padding: 2.4em 0;
		background-color: var(--pink-300);
		border-radius: 40px;
	}
	.numbers {
		display: flex;
		justify-content: space-between;
		max-width: 720px;
		margin-top: 1.2em;
	}

	@media screen and (max-width: 1240px) {
		.numbers {
			padding: 12px;
			/* align-items: center; */
			flex-wrap: wrap;
			/* flex-direction: column; */
			gap: 24px;
		}
	}
</style>
