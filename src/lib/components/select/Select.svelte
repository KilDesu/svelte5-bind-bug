<script lang="ts" generics="T extends SelectValue">
  import type { SelectProps, SelectValue } from "./props";

  let { value = $bindable() }: SelectProps<T> = $props();
</script>

<input bind:value readonly />
