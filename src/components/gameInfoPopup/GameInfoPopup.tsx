// styles
import "./GameInfoPopup.css";

// hooks
import { useStartGame } from "../../hooks/startGameHook";

const GameInfoPopup = () => {
	const startGame = useStartGame();

	return (
		<div className="game-popup_container">
			<div className="game-popup">
				<div className="game-popup_card">
					<p>You've lost!</p>
					<button onClick={startGame} className="game-popup_again-btn">
						Start Again
					</button>
				</div>
			</div>
		</div>
	);
};

export default GameInfoPopup;
