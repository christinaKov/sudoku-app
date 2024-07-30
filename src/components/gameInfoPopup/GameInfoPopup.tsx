// styles
import "./GameInfoPopup.css";

// hooks
import { useStartGame } from "../../hooks/startGameHook";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

// components
import DifficultySelect from "./difficultySelect/DifficultySelect";

const GameInfoPopup = () => {
	const startGame = useStartGame();

	const gameStatus = useSelector((state: RootState) => state.game.status);

	return (
		<div className="game-popup_container">
			<div className="game-popup">
				<div className="game-popup_card">
					{gameStatus === "game-over" && <p>You've lost!</p>}
					<p>Create a new game</p>
					<DifficultySelect></DifficultySelect>
					<button onClick={startGame} className="game-popup_again-btn">
						Start {gameStatus === "game-over" && "Again"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default GameInfoPopup;
