import { XIcon } from "@sp98/ui/icons";
import { StatusBar } from "@sp98/ui/status-bar";
import { TitleBar } from "@sp98/ui/title-bar";
import { Window } from "@sp98/ui/window";

import type { Component } from "solid-js";

export const GameBoard: Component = () => {
	return (
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
				<Window.Body>
					Body
					<StatusBar.Root>
						<StatusBar.Container>
							<StatusBar.Field>Field</StatusBar.Field>
							<StatusBar.Field>Field2</StatusBar.Field>
						</StatusBar.Container>
					</StatusBar.Root>
				</Window.Body>
			</Window.Container>
		</Window.Root>
	);
};
