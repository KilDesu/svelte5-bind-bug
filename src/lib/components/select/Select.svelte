<script lang="ts" generics="T extends SelectValue">
  import type { SelectProps, SelectValue, SelectValueMultiple, SelectValueSingle } from "./props";

  let { value = $bindable(), displayValue = false, multiple = false }: SelectProps<T> = $props();

  const currentDisplayValue = $derived.by(() => {
    if (displayValue !== undefined) {
      return displayValue;
    }

    if (!multiple) {
      return value;
    }

    return (value as SelectValueMultiple).join(", ");
  });
</script>

<input value={currentDisplayValue} readonly />
