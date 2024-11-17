import { ark, type Assign } from "@ark-ui/solid";
import {
	titleBar,
	type TitleBarVariantProps,
} from "@sp98/styled-system/recipes";
import type { HTMLStyledProps } from "@sp98/styled-system/types";
import type { ComponentProps } from "solid-js";
import { IconButton, type IconButtonProps } from "../icon-button/icon-button";
import { createStyleContext } from "../utils/create-style-context";
import { ParentRoot } from "../utils/parent-root";

const { withRootProvider, withContext } = createStyleContext(titleBar);

export type RootProps = ComponentProps<typeof Root>;
export const Root =
	withRootProvider<Assign<HTMLStyledProps<"div">, TitleBarVariantProps>>(
		ParentRoot,
	);

export const Container = withContext<HTMLStyledProps<"div">>(
	ark.div,
	"container",
);
export type ContainerProps = ComponentProps<typeof Container>;

export const Text = withContext<HTMLStyledProps<"div">>(ark.span, "text");
export type TextProps = ComponentProps<typeof Root>;

export const Controls = withContext<HTMLStyledProps<"nav">>(
	ark.div,
	"controls",
);
export type ControlsProps = ComponentProps<typeof Root>;

export const Control = withContext<IconButtonProps>((props) => {
	return <IconButton {...props} />;
}, "control");

export type ControlProps = ComponentProps<typeof Root>;
