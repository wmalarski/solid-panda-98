import { Title } from "@solidjs/meta";
import { Box } from "@sp98/style-system/jsx";

export default function Home() {
	return (
		<main>
			<Title>Hello World</Title>
			<h1 class="font-bold">Hello world!</h1>
			<p>
				Visit{" "}
				<a href="https://start.solidjs.com" target="_blank" rel="noreferrer">
					start.solidjs.com
				</a>{" "}
				to learn how to build SolidStart apps.
			</p>
			<Box>AA</Box>
		</main>
	);
}
