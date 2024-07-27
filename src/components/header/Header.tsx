// styles
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

// redux
import { useDispatch } from "react-redux";
import { setSudokuGen } from "../../app/sudokuSlice";

const Header = () => {
	const dispatch = useDispatch();

	const handleReset = () => {
		dispatch(setSudokuGen());
	};

	return (
		<header className="header">
			<h1 className="main-title">Sudoku</h1>
			<nav>
				<ul>
					<li>
						<label htmlFor="">
							Difficulty:
							<select defaultValue={"random"} name="difficulty" id="difficulty">
								<option value="random">Random</option>
								<option value="easy">Easy</option>
								<option value="medium">Medium</option>
								<option value="hard">Hard</option>
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
