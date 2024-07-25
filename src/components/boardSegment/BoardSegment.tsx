// components
import BoardCell from "../boardCell/BoardCell";

// types
import { Segment } from "../../app/sudokuSlice";

const BoardSegment = ({ segment }: { segment: Segment }) => {
	return (
		<div className="sudoku-segment">
			{segment.cells.map((cell, i) => (
				<BoardCell key={i} cell={cell}></BoardCell>
			))}
		</div>
	);
};

export default BoardSegment;
