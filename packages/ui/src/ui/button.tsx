import { button, type ButtonVariant } from "@sp98/styled-system/recipes";
import type { ParentProps, ValidComponent } from "solid-js";
import { splitProps } from "solid-js";

import * as ButtonPrimitive from "@kobalte/core/button";
import type { PolymorphicProps } from "@kobalte/core/polymorphic";

import { cn } from "../utils";

type ButtonProps<T extends ValidComponent = "button"> =
	ButtonPrimitive.ButtonRootProps<T> &
		Partial<ButtonVariant> &
		ParentProps<{ class?: string | undefined }>;

const Button = <T extends ValidComponent = "button">(
	props: PolymorphicProps<T, ButtonProps<T>>,
) => {
	const [local, others] = splitProps(props as ButtonProps, [
		"variant",
		"size",
		"class",
	]);

	return (
		<ButtonPrimitive.Root
			class={cn(
				button({ variant: local.variant, size: local.size }),
				local.class,
			)}
			{...others}
		/>
	);
};

export { Button };
export type { ButtonProps };
