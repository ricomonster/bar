<script lang="ts">
  import { onMount } from 'svelte';

  // Client
  import { sayHelloWorld } from './client';

  onMount(async () => {
    const result = await sayHelloWorld();
    console.log(result);
  });
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
