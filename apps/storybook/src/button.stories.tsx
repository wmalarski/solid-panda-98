import { Button } from "@sp98/ui";
import type { ComponentProps } from "solid-js";

const meta = {
	component: Button,
	argTypes: {
		type: {
			control: { type: "radio" },
			options: ["button", "submit", "reset"],
		},
	},
};

export default meta;

export const Primary = {
	render: (props: ComponentProps<typeof Button>) => (
		<Button {...props}>Hello</Button>
	),
	name: "Button",
	args: {
		children: "Hello",
		type: "button",
		variant: "default",
	},
};
