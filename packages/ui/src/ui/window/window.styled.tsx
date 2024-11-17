import { ark } from "@ark-ui/solid";
import { window, type WindowVariantProps } from "@sp98/styled-system/recipes";
import type { Assign, HTMLStyledProps } from "@sp98/styled-system/types";
import type { ComponentProps } from "solid-js";
import { createStyleContext } from "../utils/create-style-context";
import { ParentRoot } from "../utils/parent-root";

const { withRootProvider, withContext } = createStyleContext(window);

export type RootProps = ComponentProps<typeof Root>;
export const Root =
	withRootProvider<Assign<HTMLStyledProps<"div">, WindowVariantProps>>(
		ParentRoot,
	);

export const Container = withContext<HTMLStyledProps<"div">>(
	ark.div,
	"container",
);
export type ContainerProps = ComponentProps<typeof Container>;

export const Body = withContext<HTMLStyledProps<"div">>(ark.div, "body");
export type BodyProps = ComponentProps<typeof Body>;
