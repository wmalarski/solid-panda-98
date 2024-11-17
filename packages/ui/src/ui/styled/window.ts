import { window, type WindowVariantProps } from "@sp98/styled-system/recipes";
import type { HTMLStyledProps } from "@sp98/styled-system/types";
import type { ComponentProps } from "solid-js";
import { createStyleContext } from "../utils/create-style-context";

const { withRootProvider, withContext } = createStyleContext(window);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withRootProvider<WindowVariantProps>("div");

export const Body = withContext<HTMLStyledProps<"div">>("div", "body");
export type BodyProps = ComponentProps<typeof Body>;
