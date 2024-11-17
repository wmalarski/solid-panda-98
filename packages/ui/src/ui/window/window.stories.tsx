import { XIcon } from "@sp98/ui/icons";
import { TitleBar } from "@sp98/ui/title-bar";
import { Window } from "@sp98/ui/window";

const meta = {
	component: Window.Body,
	argTypes: {},
};

export default meta;

export const Primary = {
	render: () => (
		<Window.Root>
			<Window.Container>
				<TitleBar.Root>
					<TitleBar.Container>
						<TitleBar.Text>AA</TitleBar.Text>
						<TitleBar.Controls>
							<TitleBar.Control>
								<XIcon />
							</TitleBar.Control>
						</TitleBar.Controls>
					</TitleBar.Container>
				</TitleBar.Root>
				<Window.Body>AAA</Window.Body>
			</Window.Container>
		</Window.Root>
	),
	name: "Window",
	args: {},
};
