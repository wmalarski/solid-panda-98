import { defineSlotRecipe } from "@pandacss/dev";

export const field = defineSlotRecipe({
	className: "field",
	description: "Styles for the Field component",
	slots: ["root", "errorText", "helperText", "label", "select"],
	base: {
		root: {
			// fontFamily: "sans-serif, Arial",
			// WebkitFontSmoothing: "none",
			// fontSize: "11px",
			// display: "inline-flex",
			// alignItems: "center",
			// _focus: {
			// 	outline: "1px dotted #000000",
			// },
		},
		errorText: {
			// "& svg": {
			// 	width: "12px",
			// 	height: "12px",
			// 	strokeWidth: "4px",
			// },
		},
		helperText: {
			// position: "relative",
			// marginLeft: "{spacing.checkbox-total-width}",
		},
		label: {},
		select: {
			// content: "''",
			// position: "absolute",
			// display: "inline-block",
			// width: "{spacing.checkbox-width}",
			// height: "{spacing.checkbox-width}",
			// background: "{colors.button-highlight}",
			// boxShadow: "{borders.border-field}",
			// marginRight: "{spacing.radio-label-spacing}",
			// _active: {
			// 	background: "{colors.surface}",
			// },
			// _disabled: {
			// 	background: "{colors.surface}",
			// },
		},
	},
});
