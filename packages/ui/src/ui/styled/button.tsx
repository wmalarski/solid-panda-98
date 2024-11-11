import { ark } from "@ark-ui/solid";
import { styled } from "@sp98/styled-system/jsx";
import { button } from "@sp98/styled-system/recipes";
import type { ComponentProps } from "solid-js";

export type ButtonProps = ComponentProps<typeof Button>;
export const Button = styled(ark.button, button);
