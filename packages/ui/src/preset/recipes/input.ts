import { defineRecipe } from "@pandacss/dev";

export const input = defineRecipe({
	className: "input",
	description: "Styles for the Input component",
	base: {
		padding: "3px 4px",
		border: "none",
		boxShadow: "{borders.border-field}",
		backgroundColor: "{colors.button-highlight}",
		appearance: "none",
		borderRadius: 0,
		height: "21px",
		lineHeight: 2,

		_disabled: {
			backgroundColor: "{colors.surface}",
		},

		_readOnly: {
			backgroundColor: "{colors.surface}",
		},

		_focus: {
			outline: "none",
		},
	},
});
