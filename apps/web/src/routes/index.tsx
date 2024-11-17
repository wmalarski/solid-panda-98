import { Title } from "@solidjs/meta";
import { Button } from "@sp98/ui";
import { GameBoard } from "~/components/board/game-board";

export default function Home() {
	return (
		<main>
			<Title>Hello World</Title>
			<h1 class="font-bold">Hello world!</h1>
			<Button>AA</Button>
			<GameBoard />
		</main>
	);
}
