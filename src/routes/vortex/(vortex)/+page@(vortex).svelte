<script lang="ts">
  import type { PageData } from "../$types";

  export let data: PageData & { guides: any[] };
</script>

<div class="vortex">
  <h2>Welcome to Vortex</h2>
  <ul>
    {#each data.guides as guide}
      <li><a href={`/vortex/${guide.id}`}>{guide.title}</a></li>
    {/each}    
  </ul>
</div>

<style>
  .vortex {
    text-align: center;
    display: block;
    margin: 20px auto;
    padding: 20px;
  }
  
  h2 {
    font-size: 2.3rem;
    font-weight: bold;
    text-align: center;
  }
  ul {
    list-style: none;
    text-align: left;
    padding: 0;
  }
  li {
    padding: 10px;
  }
  a {
    font-size: 1.2rem;
    font-weight: 600;
  }
</style>