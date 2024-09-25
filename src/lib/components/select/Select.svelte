<script lang="ts" generics="H extends string | number">
  type Props<T> = { value: T };

  let { value = $bindable() }: Props<H> = $props();
</script>

<input bind:value readonly />
