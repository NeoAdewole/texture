<script>
  import logo from '$lib/images/logo.png';
  let title = 'Vortex';
  let subheading = 'Frontend for the Vortex app';
  export { logo, title, subheading };
</script>

<div class="title w-full bg-slate-500">
  <img src={logo} alt="">
  <h1>{title}</h1>
  <p>{subheading}</p>
</div>

<style>
  .title {
    text-align: center;
    display: block;
    margin: 10px auto;
    padding: 10px;
  }
  .title img {
    width: 100%;
    max-width: 200px;
    height: auto;
    display: block;
    margin: 0 auto;
  }
</style>