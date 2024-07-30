// styles
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate, faPencil } from "@fortawesome/free-solid-svg-icons";

// redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { createNewGame, toggleGameMode } from "../../app/slices/gameSlice";

const Header = () => {
	const dispatch = useDispatch();

	const gameMode = useSelector((state: RootState) => state.game.mode);

	const handleReset = () => {
		dispatch(createNewGame());
	};

	const handleDraftMode = () => {
		dispatch(toggleGameMode());
	};

	const mistakesCounter = useSelector(
		(state: RootState) => state.game.mistakesCounter
	);

	return (
		<header className="header">
			<h1 className="main-title">Sudoku</h1>
			<nav>
				<ul>
					<li>
						<div onClick={handleDraftMode} className="header_tooltip-container">
							<div className="reset-game_tooltip">Draft Mode</div>
							<div className="header_draft-info">
								{gameMode === "draft" ? "On" : "Off"}
							</div>
							<FontAwesomeIcon icon={faPencil} className="header_draft-icon" />
						</div>
					</li>
					<li className="header_item">
						<p>Mistakes:</p>
						<p>
							<span>{mistakesCounter}</span>/<span>3</span>
						</p>
					</li>
					<li>
						<div onClick={handleReset} className="header_tooltip-container">
							<div className="reset-game_tooltip">Start Again</div>
							<FontAwesomeIcon icon={faArrowsRotate} />
						</div>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
