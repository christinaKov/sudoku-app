import "./App.css";

//components
import Board from "./components/board/Board";

function App() {
	return (
		<div className="app">
			<h1>Sudoku</h1>
			<Board></Board>
		</div>
	);
}

export default App;
