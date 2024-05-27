<script lang="ts">
  export let data;
</script>

<a href="/vortex">{`< Back to guides`}</a>
<div class="guide">
  <h2 class="title">{data.guide.title}</h2>
  <span>Author: {data.guide.userId}</span>
  <p>{data.guide.body}</p>
</div>

<style>
  .guide {
    width: 100%;
    margin: 20px auto;
    padding: 10px;
    border: 1px dotted rgba(255,255,255,0.2);
  }
  .title {
    font-size: 1.3rem;
    font-weight: bold;
    text-align: center;
  }
  span {
    margin: 0 auto;
    text-align: center;
  }
</style>