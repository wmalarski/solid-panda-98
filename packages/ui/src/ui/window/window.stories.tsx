import { TitleBar, Window } from "@sp98/ui";

const meta = {
	component: Window,
	argTypes: {},
};

export default meta;

export const Primary = {
	render: () => (
		<Window.Root>
			<TitleBar.Root>
				<TitleBar.Text>AA</TitleBar.Text>
				<TitleBar.Controls>
					<TitleBar.Control>A</TitleBar.Control>
				</TitleBar.Controls>
			</TitleBar.Root>
			<Window.Body />
		</Window.Root>
	),
	name: "Window",
	args: {},
};
