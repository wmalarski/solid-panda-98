import type { Component, ComponentProps } from "solid-js";

import { IconButton } from "../icon-button/icon-button";
import { XIcon } from "../icons/icons";
import { CloseTrigger } from "./dialog.styled";

export * as Dialog from "./dialog.styled";

export const DialogCloseXTrigger: Component<
	ComponentProps<typeof CloseTrigger>
> = (props) => {
	return (
		<CloseTrigger
			asChild={(props) => <IconButton size="sm" {...props()} />}
			position="absolute"
			top="2"
			right="2"
			{...props}
		>
			<XIcon />
		</CloseTrigger>
	);
};
