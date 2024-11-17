import { Button } from "@sp98/ui/button";
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
		<Button {...props}>Hello2</Button>
	),
	name: "Button2",
	args: {
		children: "Hello",
		type: "button",
		variant: "default",
	},
};
