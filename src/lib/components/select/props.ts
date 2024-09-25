import type { HTMLAttributes } from "svelte/elements";

export type SelectValue = string | number;

export interface SelectProps<T extends SelectValue> extends HTMLAttributes<HTMLDivElement> {
  value: T;
  displayValue?: boolean;
  multiple?: boolean;
}
