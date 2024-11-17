import { ark, type Assign } from "@ark-ui/solid";
import {
	titleBar,
	type TitleBarVariantProps,
} from "@sp98/styled-system/recipes";
import type { HTMLStyledProps } from "@sp98/styled-system/types";
import type { ComponentProps } from "solid-js";
import { createStyleContext } from "../utils/create-style-context";

const { withRootProvider, withContext } = createStyleContext(titleBar);

export type RootProps = ComponentProps<typeof Root>;
export const Root =
	withRootProvider<Assign<HTMLStyledProps<"div">, TitleBarVariantProps>>("div");

export const Text = withContext<HTMLStyledProps<"div">>("span", "text");
export type TextProps = ComponentProps<typeof Root>;

export const Controls = withContext<HTMLStyledProps<"nav">>("div", "controls");
export type ControlsProps = ComponentProps<typeof Root>;

export const Control = withContext<HTMLStyledProps<"button">>(
	ark.button,
	"control",
);
export type ControlProps = ComponentProps<typeof Root>;
