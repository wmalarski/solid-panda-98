import { ark, type Assign, Dialog } from "@ark-ui/solid";
import {
	titleBar,
	type TitleBarVariantProps,
} from "@sp98/styled-system/recipes";
import type { HTMLStyledProps } from "@sp98/styled-system/types";
import type { ComponentProps } from "solid-js";
import { createStyleContext } from "../utils/create-style-context";

const { withRootProvider, withContext } = createStyleContext(titleBar);

export type RootProviderProps = ComponentProps<typeof RootProvider>;
export const RootProvider = withRootProvider<
	Assign<Dialog.RootProviderProps, TitleBarVariantProps>
>(Dialog.RootProvider);

export type RootProps = ComponentProps<typeof Root>;
export const Root = withRootProvider<
	Assign<Dialog.RootProps, TitleBarVariantProps>
>(Dialog.Root);

export const Backdrop = withContext<
	Assign<HTMLStyledProps<"div">, Dialog.BackdropBaseProps>
>(Dialog.Backdrop, "text");

export const CloseTrigger = withContext<HTMLStyledProps<"nav">>(
	"nav",
	"controls",
);

export const Control = withContext<HTMLStyledProps<"button">>(
	ark.button,
	"control",
);
