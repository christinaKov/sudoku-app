// react
import { useEffect } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";

// store
import { RootState } from "../../app/store";
import { setSudokuGen } from "../../app/slices/sudokuSlice";

// components
import BoardSegment from "../boardSegment/BoardSegment";

const Board = () => {
	const dispatch = useDispatch();

	const segments = useSelector((state: RootState) => state.sudoku.segments);

	useEffect(() => {
		dispatch(setSudokuGen());
	}, []);

	return (
		<div className="sudoku-board">
			{segments.map((segment, i) => (
				<BoardSegment segment={segment} key={i}></BoardSegment>
			))}
		</div>
	);
};

export default Board;
