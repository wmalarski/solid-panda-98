import { Field } from "@sp98/ui";

const meta = {
	component: Field.Select,
	argTypes: {},
};

export default meta;

export const Primary = {
	render: () => (
		<Field.Root>
			<Field.Label>Label</Field.Label>
			<Field.Select>
				<option value="option1">Option</option>
			</Field.Select>
			<Field.HelperText>Some additional Info</Field.HelperText>
		</Field.Root>
	),
	name: "Select",
	args: {},
};
