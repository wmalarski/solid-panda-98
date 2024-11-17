import { Checkbox } from "@sp98/ui/checkbox";
import type { ComponentProps } from "solid-js";

const meta = {
	component: Checkbox,
	argTypes: {},
};

export default meta;

export const Primary = {
	render: (props: ComponentProps<typeof Checkbox>) => (
		<Checkbox {...props}>Hello</Checkbox>
	),
	name: "Checkbox",
	args: {
		children: "Hello",
	},
};
