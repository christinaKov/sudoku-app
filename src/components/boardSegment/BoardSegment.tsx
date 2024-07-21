//react
import { useState } from "react";

// components
import BoardCell from "../boardCell/BoardCell";

const BoardSegment = () => {
	const [cells, setCells] = useState(Array.from(Array(9).keys(), (x) => x + 1));

	return (
		<div className="sudoku-segment">
			{cells.map((cell) => (
				<BoardCell key={cell} cell={cell}></BoardCell>
			))}
		</div>
	);
};

export default BoardSegment;
