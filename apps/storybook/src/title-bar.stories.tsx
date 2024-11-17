import { TitleBar } from "@sp98/ui";

const meta = {
	component: TitleBar,
	argTypes: {},
};

export default meta;

export const Primary = {
	render: () => (
		<TitleBar.Root>
			<TitleBar.Text>AA</TitleBar.Text>
			<TitleBar.Controls>
				<TitleBar.Control>A</TitleBar.Control>
			</TitleBar.Controls>
		</TitleBar.Root>
	),
	name: "Title Bar",
	args: {},
};
