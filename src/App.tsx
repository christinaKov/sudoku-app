import "./App.css";

//components
import Board from "./components/board/Board";
import Header from "./components/header/Header";

function App() {
	return (
		<div className="app">
			<Header></Header>
			<Board></Board>
		</div>
	);
}

export default App;
