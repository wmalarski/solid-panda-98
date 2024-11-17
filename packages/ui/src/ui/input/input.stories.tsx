import { Field } from "@sp98/ui/field";
import { Input } from "@sp98/ui/input";

const meta = {
	component: Input,
	argTypes: {},
};

export default meta;

export const Primary = {
	render: () => (
		<Field.Root>
			<Field.Label>Label</Field.Label>
			<Input placeholder="Placeholder" />
			<Field.HelperText>Some additional Info</Field.HelperText>
		</Field.Root>
	),
	name: "Input",
	args: {},
};

export const WithError = {
	render: () => (
		<Field.Root>
			<Field.Label>Label</Field.Label>
			<Input placeholder="Placeholder" />
			<Field.ErrorText>Some additional Info</Field.ErrorText>
		</Field.Root>
	),
	name: "Input with Error",
	args: {},
};
