//react
import { useEffect, useState } from "react";

// components
import BoardCell from "../boardCell/BoardCell";

const BoardSegment = () => {
	const [cells] = useState(Array.from(Array(9).keys(), (x) => x + 1));
	const [randomCells, setRandomCells] = useState(cells);

	useEffect(() => {
		shuffleCells();
	}, []);

	const shuffleCells = () => {
		const generatedCells: number[] = []; // new randomized list
		const usedIndex: number[] = []; // indexes that were used as random

		cells.forEach((cell) => {
			const randomI = Math.floor(Math.random() * 9); // creates new random index

			// checks if this id was used in random array
			if (!usedIndex.includes(randomI)) {
				generatedCells[randomI] = cell; // if no, sets current cell value to this random index
				usedIndex.push(randomI); // adds index to used index list
			} else {
				// if the index was used,
				// gets list of unused indexes
				const unusedIndex = [...Array.from(Array(9).keys())].filter(
					(index) => !usedIndex.includes(index)
				);
				usedIndex.push(unusedIndex[0]); // sets current cell value to first unused index
				generatedCells[unusedIndex[0]] = cell; // adds index to used index list
			}
		});

		setRandomCells(generatedCells); // sets random list to randomCells list
	};

	return (
		<div className="sudoku-segment">
			{randomCells.map((cell) => (
				<BoardCell key={cell} cell={cell}></BoardCell>
			))}
		</div>
	);
};

export default BoardSegment;
