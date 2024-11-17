import { TitleBar } from "@sp98/ui/title-bar";

const meta = {
	component: TitleBar.Root,
	argTypes: {},
};

export default meta;

export const Primary = {
	render: () => (
		<TitleBar.Root>
			<TitleBar.Container>
				<TitleBar.Text>AA</TitleBar.Text>
				<TitleBar.Controls>
					<TitleBar.Control>A</TitleBar.Control>
				</TitleBar.Controls>
			</TitleBar.Container>
		</TitleBar.Root>
	),
	name: "Title Bar",
	args: {},
};
