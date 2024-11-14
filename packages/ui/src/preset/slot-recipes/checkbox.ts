import { defineSlotRecipe } from "@pandacss/dev";

export const checkbox = defineSlotRecipe({
	className: "checkbox",
	description: "Styles for the Checkbox component",
	slots: ["root", "indicator", "label", "group", "control"],
	base: {
		root: {
			fontFamily: "sans-serif, Arial",
			WebkitFontSmoothing: "none",
			fontSize: "11px",

			display: "inline-flex",
			alignItems: "center",
			_focus: {
				outline: "1px dotted #000000",
			},
		},
		indicator: {
			"& svg": {
				width: "12px",
				height: "12px",
				strokeWidth: "4px",
			},
		},
		label: {
			position: "relative",
			marginLeft: "{spacing.checkbox-total-width}",
		},
		group: {},
		control: {
			content: "''",
			position: "absolute",
			display: "inline-block",
			width: "{spacing.checkbox-width}",
			height: "{spacing.checkbox-width}",
			background: "{colors.button-highlight}",
			boxShadow: "{borders.border-field}",
			marginRight: "{spacing.radio-label-spacing}",

			_active: {
				background: "{colors.surface}",
			},

			_disabled: {
				background: "{colors.surface}",
			},
		},
	},
});
