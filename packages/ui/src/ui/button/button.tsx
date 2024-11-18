import { styled } from "@sp98/styled-system/jsx";
import type { Component, JSX } from "solid-js";
import { Show, splitProps } from "solid-js";
import {
	Button as StyledButton,
	type ButtonProps as StyledButtonProps,
} from "./button.styled";

interface ButtonLoadingProps {
	loading?: boolean;
	loadingText?: JSX.Element;
}

export interface ButtonProps extends StyledButtonProps, ButtonLoadingProps {}

export const Button: Component<ButtonProps> = (props) => {
	const [localProps, rest] = splitProps(props, [
		"loading",
		"disabled",
		"loadingText",
		"children",
	]);
	const trulyDisabled = () => localProps.loading || localProps.disabled;

	return (
		<StyledButton disabled={trulyDisabled()} {...rest}>
			<Show
				when={localProps.loading && !localProps.loadingText}
				fallback={localProps.loadingText || localProps.children}
			>
				<styled.span opacity={0}>{localProps.children}</styled.span>
			</Show>
		</StyledButton>
	);
};
