//react
import { useEffect, useState } from "react";

// components
import BoardCell from "../boardCell/BoardCell";

// redux
import { useDispatch, useSelector } from "react-redux";

// store
import { RootState } from "../../app/store";
import { randomiseSegments } from "../../app/sudokuSegmentsSlice";

const BoardSegment = ({ segmentIndex }: { segmentIndex: number }) => {
	const dispatch = useDispatch();

	const randomCells = useSelector(
		(state: RootState) => state.segments.randomSegments[segmentIndex].cells
	);

	useEffect(() => {
		dispatch(randomiseSegments());
	}, []);

	return (
		<div className="sudoku-segment">
			{randomCells.map((cell) => (
				<BoardCell key={cell.value} cell={cell.value}></BoardCell>
			))}
		</div>
	);
};

export default BoardSegment;
