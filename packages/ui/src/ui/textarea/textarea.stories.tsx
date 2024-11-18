import { Field, Textarea } from "@sp98/ui";

const meta = {
	component: Textarea,
	argTypes: {},
};

export default meta;

export const Primary = {
	render: () => (
		<Field.Root>
			<Field.Label>Label</Field.Label>
			<Textarea />
			<Field.HelperText>Some additional Info</Field.HelperText>
		</Field.Root>
	),
	name: "Textarea",
	args: {},
};
