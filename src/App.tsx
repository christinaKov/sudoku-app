import "./App.css";

//components
import Board from "./components/board/Board";
import GameInfoPopup from "./components/gameInfoPopup/GameInfoPopup";
import Header from "./components/header/Header";

// redux
import { RootState } from "./app/store";
import { useSelector } from "react-redux";

function App() {
	const gameStatus = useSelector((state: RootState) => state.game.status);

	return (
		<div className="app">
			<Header></Header>
			<Board></Board>
			{gameStatus === "game-over" && <GameInfoPopup></GameInfoPopup>}
		</div>
	);
}

export default App;
