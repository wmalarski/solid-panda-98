import { ark } from "@ark-ui/solid";
import {
	titleBar,
	type TitleBarVariantProps,
} from "@sp98/styled-system/recipes";
import type { HTMLStyledProps } from "@sp98/styled-system/types";
import type { ComponentProps, ParentProps } from "solid-js";
import { IconButton, type IconButtonProps } from "../icon-button/icon-button";
import { createStyleContext } from "../utils/create-style-context";
import { ParentRoot } from "../utils/parent-root";

const { withRootProvider, withContext } = createStyleContext(titleBar);

export type RootProps = ComponentProps<typeof Root>;
export const Root =
	withRootProvider<ParentProps<TitleBarVariantProps>>(ParentRoot);

export const Container = withContext<HTMLStyledProps<"div">>(
	ark.div,
	"container",
);
export type ContainerProps = ComponentProps<typeof Container>;

export const Text = withContext<HTMLStyledProps<"span">>(ark.span, "text");
export type TextProps = ComponentProps<typeof Text>;

export const Controls = withContext<HTMLStyledProps<"div">>(
	ark.div,
	"controls",
);
export type ControlsProps = ComponentProps<typeof Controls>;

export const Control = withContext<IconButtonProps>((props) => {
	return <IconButton {...props} />;
}, "control");

export type ControlProps = ComponentProps<typeof Control>;
