<script lang="ts">
  import Home from "./components/home.svelte";
  import About from "./components/about.svelte";
  import Sponsors from "./components/sponsors.svelte";
  import Card from "./components/Card.svelte";
  interface FAQ {
    title: string;
    content?: string;
    isActive: boolean;
  }
  const faqs: FAQ[] = [
    {
      title: "How many team members can I invite?",
      content:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
      isActive: true,
    },
    {
      title: "What is the maximum file upload size?",
      content:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
      isActive: true,
    },
    {
      title: "How do I reset my password?",
      content:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
      isActive: true,
    },
    {
      title: "Can I cancel my subscription?",
      content:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
      isActive: true,
    },
    {
      title: "Do you provide additional support?",
      content:
        "No more than 2GB. All files in your account must fit your allotted storage space.",
      isActive: true,
    },
  ];
</script>

<svelte:head>
  <script defer async src="https://apply.devfolio.co/v2/sdk.js"></script>
</svelte:head>

<Home />
<About />
<main>
  <Card data={faqs} />
</main>
<Sponsors />
<footer>
  <div class="container">
    <div class="flex justify-between items-center">
      <div>
        © 2022, <a
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
  footer {
    width: 100%;
    padding: 24px 0;
  }
  main {
    width: 100vw;
    height: 100vh;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    overflow: hidden;
  }
  @media all and (max-width: 1440px) {
    main {
      height: auto;
      width: 100%;
      padding: -50px 0 70px 0;
    }
  }
</style>
