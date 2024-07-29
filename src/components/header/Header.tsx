// styles
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

// redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { createNewGame } from "../../app/slices/gameSlice";

const Header = () => {
	const dispatch = useDispatch();

	const handleReset = () => {
		dispatch(createNewGame());
	};

	const mistakesCounter = useSelector(
		(state: RootState) => state.game.mistakesCounter
	);

	return (
		<header className="header">
			<h1 className="main-title">Sudoku</h1>
			<nav>
				<ul>
					<li className="header_item">
						<p>Mistakes:</p>
						<p>
							<span>{mistakesCounter}</span>/<span>3</span>
						</p>
					</li>
					<li>
						<div onClick={handleReset} className="reset-game_container">
							<div className="reset-game_tooltip">Start Again</div>
							<FontAwesomeIcon
								icon={faArrowsRotate}
								className="reset-game_btn"
							/>
						</div>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
