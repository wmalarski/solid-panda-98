import type { Component } from "solid-js";
import {
	IconButton,
	type IconButtonProps,
} from "../icon-button/icon-button.styled";

export * as TitleBar from "./title-bar.styled";

export const TitleBarControl: Component<IconButtonProps> = (props) => {
	return <IconButton {...props} />;
};
