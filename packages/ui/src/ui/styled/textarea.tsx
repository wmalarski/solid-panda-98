import { Field } from "@ark-ui/solid";
import { styled } from "@sp98/styled-system/jsx";
import { textarea } from "@sp98/styled-system/recipes";
import type { ComponentProps } from "solid-js";

export type TextareaProps = ComponentProps<typeof Textarea>;
export const Textarea = styled(Field.Textarea, textarea);
