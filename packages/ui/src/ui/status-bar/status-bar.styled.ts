import { ark } from "@ark-ui/solid";
import {
	statusBar,
	type StatusBarVariantProps,
} from "@sp98/styled-system/recipes";
import type { HTMLStyledProps } from "@sp98/styled-system/types";
import type { ComponentProps, ParentProps } from "solid-js";
import { createStyleContext } from "../utils/create-style-context";
import { ParentRoot } from "../utils/parent-root";

const { withRootProvider, withContext } = createStyleContext(statusBar);

export type RootProps = ComponentProps<typeof Root>;
export const Root =
	withRootProvider<ParentProps<StatusBarVariantProps>>(ParentRoot);

export const Container = withContext<HTMLStyledProps<"div">>(
	ark.div,
	"container",
);
export type ContainerProps = ComponentProps<typeof Container>;

export const Field = withContext<HTMLStyledProps<"span">>(ark.span, "field");
export type FieldProps = ComponentProps<typeof Field>;
