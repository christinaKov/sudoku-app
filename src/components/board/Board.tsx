// react
import { useEffect } from "react";

// components
import BoardSegment from "../boardSegment/BoardSegment";

// redux
import { useDispatch, useSelector } from "react-redux";

// store
import { RootState } from "../../app/store";
import { setDefaultSegments } from "../../app/sudokuSegmentsSlice";

const Board = () => {
	const dispatch = useDispatch();

	const segments = useSelector(
		(state: RootState) => state.segments.basicSegments
	);

	useEffect(() => {
		dispatch(setDefaultSegments());
	}, []);

	return (
		<div className="sudoku-board">
			{segments.map((segment, i) => (
				<BoardSegment segmentIndex={i} key={i}></BoardSegment>
			))}
		</div>
	);
};

export default Board;
