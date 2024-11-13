import { defineTokens } from "@pandacss/dev";

export const spacing = defineTokens.spacing({
	"element-spacing": { value: "8px" },
	"grouped-button-spacing": { value: "4px" },
	"grouped-element-spacing": { value: "6px" },
	"radio-width": { value: "12px" },
	"checkbox-width": { value: "13px" },
	"radio-label-spacing": { value: "6px" },
	"range-track-height": { value: "4px" },
	"range-spacing": { value: "10px" },

	/* Some detailed computations for radio buttons and checkboxes */
	"radio-total-width-precalc": {
		value: "{spacing.radio-width} + {spacing.radio-label-spacing}",
	},
	"radio-total-width": { value: "calc({spacing.radio-total-width-precalc})" },
	"radio-left": { value: "calc(-1 * {spacing.radio-total-width-precalc})" },
	"radio-dot-width": { value: "4px" },
	"radio-dot-top": {
		value: "calc({spacing.radio-width} / 2 - {spacing.radio-dot-width} / 2)",
	},
	"radio-dot-left": {
		value:
			"calc(-1 * ({spacing.radio-total-width-precalc}) + {spacing.radio-width} / 2 - {spacing.radio-dot-width} / 2)",
	},
	"checkbox-total-width-precalc": {
		value: "{spacing.checkbox-width} + {spacing.radio-label-spacing}",
	},
	"checkbox-total-width": {
		value: "calc({spacing.checkbox-total-width-precalc})",
	},
	"checkbox-left": {
		value: "calc(-1 * {spacing.checkbox-total-width-precalc})",
	},
	"checkmark-width": { value: "7px" },
	"checkmark-left": { value: "3px" },
});
