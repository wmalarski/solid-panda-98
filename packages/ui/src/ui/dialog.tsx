import type { Component, ComponentProps } from "solid-js";

import { IconButton } from "./icon-button";
import { XIcon } from "./icons";
import { CloseTrigger } from "./styled/dialog";

export * as Dialog from "./styled/dialog";

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
