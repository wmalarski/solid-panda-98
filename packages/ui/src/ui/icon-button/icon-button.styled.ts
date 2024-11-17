import { ark } from "@ark-ui/solid";
import { styled } from "@sp98/styled-system/jsx";
import { type ButtonVariantProps, button } from "@sp98/styled-system/recipes";
import type { ComponentProps } from "solid-js";

export type IconButtonProps = ComponentProps<typeof IconButton>;
export const IconButton = styled(ark.button, button, {
	defaultProps: { px: "0" } as ButtonVariantProps,
});
