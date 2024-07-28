// redux
import { useDispatch } from "react-redux";

// reducers
import { setSudokuGen } from "../app/slices/sudokuSlice";
import { resetGame } from "../app/slices/gameSlice";

export const useStartGame = () => {
	const dispatch = useDispatch();

	const startGame = () => {
		dispatch(setSudokuGen());
		dispatch(resetGame());
	};

	return startGame;
};
