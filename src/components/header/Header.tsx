// styles
import "./Header.css";

const Header = () => {
	return (
		<header className="header">
			<h1 className="main-title">Sudoku</h1>
			<nav>
				<ul>
					<li>
						<label htmlFor="">
							Difficulty:
							<select name="difficulty" id="difficulty">
								<option selected value="">
									Random
								</option>
								<option value="">Easy</option>
								<option value="">Medium</option>
								<option value="">Hard</option>
							</select>
						</label>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
