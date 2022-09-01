<script lang="ts">
  import { trusted } from "svelte/internal";

  export let faq;
  let isOpen: boolean = true;
  const clickHandler: () => void = () => {
    if (faq.isActive) {
      isOpen = !isOpen;
    }
  };
</script>

<div class="item">
  <div class="title" class:active={faq.isActive} on:click={clickHandler}>
    <p>{faq.title}</p>
    <img
      src="src/assets/Vector.svg"
      alt="Down Arrow"
      class:opposite={faq.isActive && isOpen}
    />
  </div>
  {#if faq.content && faq.isActive}
    <div class="content" class:open={!isOpen}>
      {faq.content}
    </div>
  {/if}
</div>

<style>
  .item {
    border-bottom: 1px solid rgb(229, 229, 299);
  }
  .item > .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    position: relative;
    left: 80px;
  }
  .item > .title > p {
    color: rgb(255, 255, 255);
    padding: 20px 0;
    transition: color 0.3s;
    font-size: xx-large;
    font-weight: 500;
    font-family: var(--mono);
  }
  .item > .title > p:hover {
    color: rgb(198, 134, 117);
  }
  .item > .title > img {
    width: 25px;
    height: 11px;
    position: relative;
    right: 100px;
    transition: transform 0.5s;
  }
  .item > .content {
    color: rgb(173, 167, 167);
    margin-bottom: 20px;
    transition: ease all 0.3s;
    position: relative;
    left: 80px;
    height: auto;
    opacity: 1;
    font-size: large;
    font-weight: 900;
  }
  .active {
    font-weight: 700;
  }
  .opposite {
    transform: rotate(180deg);
  }
  .open {
    height: 0 !important;
    margin: 0 !important;
    opacity: 0 !important;
    z-index: -1 !important;
  }
</style>
