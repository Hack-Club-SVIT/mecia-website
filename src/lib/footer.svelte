<script>
	import Icon from "@iconify/svelte";
	const handles = {
		twitter: "https://www.twitter.com/hackclubsvit",
		instagram: "https://www.instagram.com/hackclubsvit",
		facebook: "https://www.facebook.com/hackclubsvit",
		linkedin: "https://www.linkedin.com/company/hackclubsvit",
	};
</script>

<section id="socials">
	<div class="container">
		<h1>catch us on...</h1>
		<div class="flex" style="gap: 8px;">
			{#each Object.keys(handles) as handle}
				<a
					href={handles[handle]}
					target="_blank"
					rel="noopener noreferrer"
					class="social_link"
				>
					<Icon width="64px" icon={`carbon:logo-${handle}`} />
				</a>
			{/each}
		</div>
	</div>
</section>
<footer>
	<div class="container">
		<div class="flex justify-between items-center">
			<div>
				<Icon icon="charm:copyright" />
				2022,
				<a
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
	#socials {
		padding: 2.4em 0;
	}
	#socials .container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	footer {
		width: 100%;
		padding: 24px 0;
		border-radius: 40px 40px 0 0;
		background-color: var(--pink-300);
		font-weight: 700;
		color: var(--pink-700);
	}
	.social_link {
		color: #fff;
		transition: 600ms;
	}
	.social_link:hover {
		color: var(--pink-300);
	}
	footer a {
		color: #fff;
		font-weight: 700;
	}

	@media screen and (max-width: 640px) {
		#socials .container {
			flex-direction: column;
			gap: 24px;
			text-align: center;
		}
		#socials .container h1 {
			flex-direction: column;
			font-size: 160%;
			gap: 24px;
			text-align: center;
		}
	}
</style>
