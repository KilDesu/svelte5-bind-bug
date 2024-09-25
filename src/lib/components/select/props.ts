import type { HTMLAttributes } from "svelte/elements";

type SelectValueSingle = string | number;

export type SelectValueMultiple = SelectValueSingle[];

export type SelectValue = SelectValueSingle | SelectValueMultiple;

export interface SelectProps<T extends SelectValue> extends HTMLAttributes<HTMLDivElement> {
  value: T;
  displayValue?: boolean;
  multiple?: boolean;
}
