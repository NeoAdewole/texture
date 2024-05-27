<script>
	import { enhance } from '$app/forms';
	// import ListErrors from '$lib/ListErrors.svelte';

	/** @type {import('./$types').ActionData} */
	// export let form;
</script>

<svelte:head>
	<title>Sign in • Portal</title>
</svelte:head>

<div class="auth-page">
	<div class="container page">
    <div class="row p-4 bg-red-200 dark:bg-slate-800 dark:text-white w-full lg:w-96 mx-auto rounded-md">
      <h1 class="text-xs-center">Sign In</h1>
      <p class="text-xs-center">
        <a href="/register">Need an account?</a>
      </p>

      <!-- <ListErrors errors={form?.errors} /> -->

      <form use:enhance method="POST">
        <!-- <fieldset class="form-group">
          <input
            class="form-control form-control-lg"
            name="email"
            type="email"
            required
            placeholder="Email"
          />
        </fieldset> -->
        <fieldset class="form-group">
          <input
            class="form-control form-control-lg"
            name="username"
            type="username"
            required
            placeholder="Username"
          />
        </fieldset>
        <fieldset class="form-group">
          <input
            class="form-control form-control-lg"
            name="password"
            type="password"
            required
            placeholder="Password"
          />
        </fieldset>
        <button 
          class="py-2 px-5 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75 flex mx-auto my-2" 
          type="submit"
        >Sign in</button>
      </form>
    </div>
	</div>
</div>

<style>
  .auth-page {
    margin: 0 auto;
    padding: 2rem 0;
  }
</style>