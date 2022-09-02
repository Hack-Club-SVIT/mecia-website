<script lang="ts">
  import FAQ from "./FAQ.svelte";
  export let data;
</script>

<section id="faq">
  <FAQ {data} />
</section>

<style>
  #faq {
    padding: 2.4em 0;
    /* text-align: center; */
    background-color: var(--blue-300);
    border-radius: 40px;
  }

  /* #card {
    background-color: blue;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    width: 100%;
    overflow: hidden;
    height: 550px;
  }

  #right {
    width: 100%;
  }
  @media screen and (max-width: 1440px) {
    #card {
      padding: 2.4em 0;
      text-align: center;
      background-color: var(--pink-300);
      border-radius: 40px;
      height: 700px;
    }

    #right {
      width: 100%;
    }
  } */
</style>
