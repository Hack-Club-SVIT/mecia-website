<script lang="ts">
  import typographyLogo from "../assets/logo_typo.svg";
  import meciaMono from "../assets/logo_mono.svg";
  import hcsLogo from "../assets/hcs_logo.svg";
  // import circle from "../assets/circle.svg";
  // import triangle from "../assets/triangle.svg";
  import svitLogo from "../assets/svit_logo.svg";
  import Icon from "@iconify/svelte";
</script>

<div id="home">
  <!-- <img id="circle_1" src={circle} alt="" />
	<img id="triangle_1" src={triangle} alt="" />
	<img id="circle_2" src={circle} alt="" />
	<img id="triangle_2" src={triangle} alt="" /> -->
  <header>
    <img width="60px" src={meciaMono} alt="Hack Club SVIT logo" />
    <img width="60px" src={hcsLogo} alt="Hack Club SVIT logo" />
    <img class="svit_logo" src={svitLogo} alt="" />
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
  <div />
</div>

<style>
  header {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    width: 100%;
    padding: 0 1em;
  }
  #home {
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 1.8em 0 0;
    height: 100vh;
    background-color: var(--purple-300);
    /* background-position: center; */
    /* background-image: url("/desktop_hero_bg.svg"); */
  }
  /* #circle_1 {
		position: absolute;
		top: -700px;
		left: -400px;
		width: 64%;
	}
	#circle_2 {
		position: absolute;
		bottom: -700px;
		left: -400px;
		width: 900px;
	}
	#triangle_1 {
		position: absolute;
		transform: rotate(-9deg);
		top: -700px;
		right: -400px;
		width: 900px;
	}
	#triangle_2 {
		position: absolute;
		transform: rotate(-9deg);
		top: 20%;
		right: 20%;
		width: 600px;
	}
	@media screen and (max-width: 640px) {
		#circle_1 {
			width: 400px;
			top: -240px;
			left: -160px;
		}
		#circle_2 {
			width: 400px;
			bottom: -200px;
			left: -100px;
		}
		#triangle_1 {
			top: -80px;
			right: -80px;
			width: 200px;
		}
		#triangle_2 {
			top: -80px;
			right: -80px;
			width: 200px;
		}
	} */
  .hero {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 24px;
  }
  .typo_logo {
    width: 85%;
    max-width: 42em;
  }
  .svit_logo {
    position: absolute;
    opacity: 0.16;
    bottom: 24px;
    left: 50%;
    transform: translate(-50%);
    width: 40%;
    max-width: 160px;
  }
  .subtext {
    font-family: var(--sans-serif);
    color: var(--pink-200);
    max-width: 640px;
    /* font-weight: 00; */
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
  /* .pulsating_gradient {
		background: linear-gradient(transparent, var(--pink-300));
		width: 100%;
		height: 180px;
		animation: pulsate 3.6s;
		animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
		animation-iteration-count: infinite;
		animation-duration: alternate;
		animation-fill-mode: both;
	} */
</style>
