import { Button } from "@sp98/ui";
import type { ComponentProps } from "solid-js";

const meta = {
	component: Button,
	argTypes: {
		type: {
			control: { type: "radio" },
			options: ["button", "submit", "reset"],
		},
		variant: {
			control: { type: "radio" },
			options: [
				"default",
				"destructive",
				"outline",
				"secondary",
				"ghost",
				"link",
			],
		},
		size: {
			control: { type: "radio" },
			options: ["default", "sm", "lg", "icon"],
		},
	},
};

export default meta;

export const Primary = {
	render: (props: ComponentProps<typeof Button>) => (
		<Button
			{...props}
			backgroundColor="amber.600"
			onClick={(): void => {
				alert("Hello from Turborepo!");
			}}
		>
			Hello
		</Button>
	),
	name: "Button",
	args: {
		children: "Hello",
		type: "button",
		variant: "default",
	},
};
