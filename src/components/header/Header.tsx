// styles
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

// redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";

//slices
import { setSudokuGen, setDifficulty } from "../../app/slices/sudokuSlice";
import { resetGame } from "../../app/slices/gameSlice";

const Header = () => {
	const dispatch = useDispatch();

	const mistakesCounter = useSelector(
		(state: RootState) => state.game.mistakesCounter
	);

	const handleReset = () => {
		dispatch(setSudokuGen());
		dispatch(resetGame());
	};

	const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		dispatch(setDifficulty(e.target.value));
	};

	return (
		<header className="header">
			<h1 className="main-title">Sudoku</h1>
			<nav>
				<ul>
					<li>
						<label className="header_item">
							Difficulty:
							<select onChange={handleDifficultyChange} defaultValue={""}>
								<option value="">Random</option>
								<option value="easy">Easy</option>
								<option value="medium">Medium</option>
								<option value="hard">Hard</option>
								<option value="expert">Expert</option>
							</select>
						</label>
					</li>
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
