<script lang="ts">
  let about = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum optio
          explicabo voluptatibus quae consequatur enim, dolore officiis nulla
          distinctio adipisci, cumque rerum odit dignissimos odio a, corporis
          obcaecati facere i`;
</script>

<section id="about">
  <div class="container">
    <h1 style="margin-bottom: 64px;">About</h1>
    <h2
      style="margin-top: 20px; margin-bottom: 36px; color: #FFFFFF99; line-height: 40px"
    >
      {about}
    </h2>
    <!-- {#each Object.keys(about) as type}
      <h2 style="margin-top: 20px; margin-bottom: 36px; color: #FFFFFF99">
        #{type}
      </h2> -->
    <!-- <div class="sponsor_grid">
        {#each about[type] as sponsor}
          <a href={sponsor[1]} target="_blank" rel="noopener noreferrer">
            <img class="sponsor_img" src={sponsor[0]} alt="" />
          </a>
        {/each}
      </div> -->
    <!-- {/each} -->
  </div>
</section>

<style>
  #about {
    padding: 2.4em 0;
    /* text-align: center; */
    background-color: var(--pink-300);
    border-radius: 40px;
  }
</style>
