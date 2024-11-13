import { defineConfig } from "tsup";
import * as preset from "tsup-preset-solid";

const preset_options: preset.PresetOptions = {
	// array or single object
	entries: [
		// default entry (index)
		{
			// entries with '.tsx' extension will have `solid` export condition generated
			entry: "src/index.tsx",
			// will generate a separate development entry
			// dev_entry: true,
		},
		{
			// entries with '.tsx' extension will have `solid` export condition generated
			entry: "src/preset/index.ts",
			name: "preset",
			// will generate a separate development entry
			// dev_entry: true,
		},
	],
	// Set to `true` to remove all `console.*` calls and `debugger` statements in prod builds
	drop_console: true,
	// Set to `true` to generate a CommonJS build alongside ESM
	// cjs: true,
	modify_esbuild_options: (options) => {
		const styled = "@sp98/styled-system";
		options.external = options.external
			? [...options.external, styled]
			: [styled];

		return options;
	},
};

// const CI =
// 	process.env["CI"] === "true" ||
// 	process.env["GITHUB_ACTIONS"] === "true" ||
// 	process.env["CI"] === '"1"' ||
// 	process.env["GITHUB_ACTIONS"] === '"1"';

const CI = false;

export default defineConfig((config) => {
	const watching = !!config.watch;

	const parsed_options = preset.parsePresetOptions(preset_options, watching);

	if (!watching && !CI) {
		const package_fields = preset.generatePackageExports(parsed_options);

		console.log(
			`package.json: \n\n${JSON.stringify(package_fields, null, 2)}\n\n`,
		);

		// will update ./package.json with the correct export fields
		preset.writePackageJson(package_fields);
	}

	return preset.generateTsupOptions(parsed_options);
});
