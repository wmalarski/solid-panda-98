import { defineSlotRecipe } from "@pandacss/dev";

export const statusBar = defineSlotRecipe({
	className: "status-bar",
	description: "Styles for the Status Bar component",
	slots: ["container", "field"],
	base: {
		container: {
			margin: "0px 1px",
			display: "flex",
			gap: "1px",
		},
		field: {
			boxShadow:
				"inset -1px -1px {colors.button-face}, inset 1px 1px {colors.button-shadow}",
			flexGrow: "1",
			padding: "2px 3px",
			margin: "0",
		},
	},
});
