<script>
  import Title from '$lib/title.svelte';
</script>

<header>      
  <div class="links">
    <nav>
      <a href="/">Mutter</a>
      <a href="/home">Texture</a>
      <a href="/vortex">Vortex</a>
      <a href="/vortex">Settings</a>
    </nav>
  </div>
  <Title title="Vortex Guides" subheading="Aggregated Articles just for you"/>
</header>
<div class="vortex">
  <slot />
</div>

<style>
	.vortex {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
    padding: 10px;
	}

  header {
    display: flex;
    justify-content: center;
    flex-direction: column;    
  }
  .links {
    display: flex;
    width: 100%;
    background: rgba(0,0,0,0.1);
  }
  nav {
    margin-left: auto;
    padding: 1rem;
  }

  a {
    color: purple;
    margin: 0.5rem;
    font-weight: 800;
  }

</style>
