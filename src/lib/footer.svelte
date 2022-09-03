<script>
	import Icon from "@iconify/svelte";
	const handles = {
		discord: "https://discord.gg/KZZzD8a7PY",
		youtube: "https://www.youtube.com/channel/UC8XHRJT9TewOS0ET6tZjszg",
		twitter: "https://www.twitter.com/hackclubsvit",
		instagram: "https://www.instagram.com/hackclubsvit",
		facebook: "https://www.facebook.com/hackclubsvit",
		linkedin: "https://www.linkedin.com/company/hackclubsvit",
	};
</script>

<section id="socials">
	<div class="container">
		<h1
			style="font-size: 200%; line-height: 1.4; margin-bottom: 32px; text-decoration: underline wavy var(--pink-200); text-underline-offset: 0.24em;"
		>
			get in touch
		</h1>
		<div class="flex flex-col items-center" style="gap: 12px;">
			<div class="flex flex-wrap justify-center" style="gap: 8px;">
				{#each Object.keys(handles) as handle}
					<a
						href={handles[handle]}
						target="_blank"
						rel="noopener noreferrer"
						class="social_link"
					>
						<Icon width="32px" icon={`carbon:logo-${handle}`} />
					</a>
				{/each}
			</div>
			<a href="mailto:hello@hackclubsvit.co" style="color: #fff;">
				<h2 style="font-size: 140%;">hello@hackclubsvit.co</h2>
			</a>
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
		/* display: flex; */
		/* justify-content: space-between; */
		/* align-items: center; */
		text-align: center;
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
