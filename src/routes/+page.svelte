<script>
  let title = 'Suspected SSR Page';

  let message = 'Edit this using input box below';

  const usePageName = () => {
    const pageName = '+page.svelte';
    title = pageName;
  };
</script>
<svelte:head>
	<title>Texture</title>
	<meta name="description" content="Feeling out SvelteKit as a frontend for the Vortex app" />
</svelte:head>
<div class="page">
  <h1>I am home on the {title}...</h1>
  <h2>Feeling out SvelteKit as a frontend for the Vortex app.</h2>
  <h3>{message}</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ullam, excepturi culpa adipisci in voluptatem assumenda totam laboriosam provident nemo ipsum quod magnam suscipit tempora. A omnis maxime praesentium vitae.</p>

  <button on:click={usePageName}>Actual Page Name</button>
  <div>
    <input type="text" bind:value={message}>
  </div>

  <div class="nav">
    <nav>
      <li><a href="/home">Texture App</a></li>
      <li><a href="/vortex">Vortex</a></li>
      <li><a href="/">Guide</a></li>
    </nav>
  </div>
</div>

<style lang="postcss">
  .page {
    text-align: center;
    display: block;
    margin: 20px auto;
    padding: 20px;
  }
  .nav {
    margin-top: 20px;
  }
  nav {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
  }
  .nav a {
    margin: 1rem;
    padding: 10px;
    font-size: 1.2rem;
  }
</style>