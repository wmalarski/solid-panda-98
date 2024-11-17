import type { Component, ParentProps } from "solid-js";

export const ParentRoot: Component<ParentProps> = (props) => {
	return <>{props.children}</>;
};
