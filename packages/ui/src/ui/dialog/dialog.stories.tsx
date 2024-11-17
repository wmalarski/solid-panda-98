import { Stack } from "@sp98/styled-system/jsx";
import { Button, Dialog, IconButton, XIcon } from "@sp98/ui";

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
					<Stack gap="8" p="6">
						<Stack gap="1">
							<Dialog.Title>Dialog Title</Dialog.Title>
							<Dialog.Description>Dialog Description</Dialog.Description>
						</Stack>
						<Stack gap="3" direction="row" width="full">
							<Dialog.CloseTrigger
								asChild={(closeTriggerProps) => (
									<Button {...closeTriggerProps()} width="full">
										Cancel
									</Button>
								)}
							/>
							<Button width="full">Confirm</Button>
						</Stack>
					</Stack>
					<Dialog.CloseTrigger
						asChild={(closeTriggerProps) => (
							<IconButton
								{...closeTriggerProps()}
								aria-label="Close Dialog"
								size="sm"
								position="absolute"
								top="2"
								right="2"
							>
								<XIcon />
							</IconButton>
						)}
					/>
				</Dialog.Content>
			</Dialog.Positioner>
		</Dialog.Root>
	),
	name: "Dialog",
	args: {},
};
