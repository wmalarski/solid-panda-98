import { Stack } from "@sp98/styled-system/jsx";
import { Button, Dialog, TitleBar, XIcon } from "@sp98/ui";

const meta = {
	component: Dialog,
	argTypes: {},
};

export default meta;

export const Primary = {
	render: () => (
		<Dialog.Root>
			<Dialog.Trigger
				asChild={(triggerProps) => (
					<Button {...triggerProps()}>Open Dialog</Button>
				)}
			/>
			<Dialog.Backdrop />
			<Dialog.Positioner>
				<Dialog.Content>
					<TitleBar.Root>
						<TitleBar.Container>
							<TitleBar.Text>AA</TitleBar.Text>
							<TitleBar.Controls>
								<Dialog.CloseTrigger
									asChild={(closeTriggerProps) => (
										<TitleBar.Control {...closeTriggerProps()}>
											<XIcon />
										</TitleBar.Control>
									)}
								/>
							</TitleBar.Controls>
						</TitleBar.Container>
					</TitleBar.Root>
					<Stack gap="3" direction="row" width="full">
						<Button width="full">Confirm</Button>
					</Stack>
				</Dialog.Content>
			</Dialog.Positioner>
		</Dialog.Root>
	),
	name: "Dialog",
	args: {},
};
