<script lang="ts">
  import Item from "./item.svelte";
  export let data;
</script>

<div id="faq">
  <h1 id="title">FAQs</h1>
  <div id="faqs">
    {#each data as faq}
      <Item {faq} />
    {/each}
  </div>
</div>

<style>
  #faq {
    padding: 2.4em 0;
    /* text-align: center; */
    background-color: var(--blue-300);
    border-radius: 40px;
  }

  #title {
    position: relative;
    left: 80px;
    bottom: 30px;
  }
</style>
