<script lang="ts">
  import Select from "$lib/components/select/Select.svelte";

  let value1 = $state("hello");
  let value2 = $state(1);
  let value3 = $state(["hello", "world"]);
</script>

<h1>Welcome to your library project</h1>
<p>Create your package using @sveltejs/package and preview/showcase your work with SvelteKit</p>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Select bind:value={value1}></Select>
<Select bind:value={value2}></Select>
<Select bind:value={value3}></Select>
