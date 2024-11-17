import { Field } from "@ark-ui/solid";
import { styled } from "@sp98/styled-system/jsx";
import { input } from "@sp98/styled-system/recipes";
import type { ComponentProps } from "solid-js";

export type InputProps = ComponentProps<typeof Input>;
export const Input = styled(Field.Input, input);
