// react
import { useState } from "react";

// components
import BoardSegment from "../boardSegment/BoardSegment";

const Board = () => {
	const [segments] = useState(Array.from(Array(9).keys()));

	return (
		<div className="sudoku-board">
			{segments.map((segment) => (
				<BoardSegment key={segment}></BoardSegment>
			))}
		</div>
	);
};

export default Board;
