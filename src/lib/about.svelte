<script lang="ts">
	import first_prize from "../assets/first_prize.svg";
	import second_prize from "../assets/second_prize.svg";
	import third_prize from "../assets/third_prize.svg";
</script>

<section id="about">
	<div class="container">
		<h1 style="margin-bottom: 24px;">what is MECIA hacks</h1>
		<p style="font-size: 120%;">
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
				<h1>80+</h1>
				<p>problem statements</p>
			</div>
		</div>
		<h1 style="margin: 24px 0 0; text-align: center;">prizes</h1>
		<div id="prizes">
			<div class="prize_card" style="gap: 12px;">
				<img style="max-width: 120px;" src={first_prize} alt="" />
				<h2>₹20,000</h2>
			</div>
			<div class="prize_card" style="gap: 12px;">
				<img style="max-width: 120px;" src={second_prize} alt="" />
				<h2>₹15,000</h2>
			</div>
			<div class="prize_card" style="gap: 12px;">
				<img style="max-width: 120px;" src={third_prize} alt="" />
				<h2>₹10,000</h2>
			</div>
		</div>
		<h3 style="text-align: center;">...and many other exciting prizes</h3>
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
	#prizes {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 24px 0;
		gap: 16px;
		overflow-x: auto;
		flex-wrap: wrap;
	}
	.prize_card {
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #222;
		background-color: white;
		padding: 1em;
		border-radius: 16px;
	}
	.prize_card h2 {
		font-family: var(--sans-serif);
		font-size: 120%;
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
