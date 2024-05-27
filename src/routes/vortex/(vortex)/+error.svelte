<script>
  import { page } from '$app/stores';
</script>

<a href="/vortex">{`< Back to guides`}</a>
<h1>{$page.status}: {$page.error?.message}</h1>