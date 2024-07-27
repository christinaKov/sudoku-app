// styles
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

// redux
import { useDispatch } from "react-redux";
import { setSudokuGen, setDifficulty } from "../../app/sudokuSlice";

const Header = () => {
	const dispatch = useDispatch();

	const handleReset = () => {
		dispatch(setSudokuGen());
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
						<label htmlFor="">
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
