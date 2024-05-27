<script>
  import Title from '$lib/title.svelte';
	import Header from '../Header.svelte';
</script>

<div class="texture">
  <Header />
  <Title title="Texture" subheading="A svelte app" logo=""/>
  <slot />
</div>

<style>
	.texture {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
</style>
