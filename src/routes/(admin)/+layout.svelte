<script>
  import Title from '$lib/title.svelte';
	import Header from '../Header.svelte';
</script>

<div class="admin">
  <Header />
  <header>
    <Title title="Texture Admin" subheading="A svelte app with a collection of handy features" logo=""/>
  </header>
  <slot />
</div>

<style>
	.admin {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
