// sudoku-gen
import { getSudoku } from "sudoku-gen";

import { createSlice } from "@reduxjs/toolkit";

export type Difficulty = "easy" | "medium" | "hard" | "expert";

export interface Cell {
	value: string;
	correctValue: string;
}

export interface Segment {
	cells: Cell[];
}

export interface SudokuState {
	segments: Segment[];
	difficulty: Difficulty | undefined;
}

const initialState: SudokuState = {
	segments: [],
	difficulty: undefined,
};

export const sudokuSlice = createSlice({
	name: "sudoku",
	initialState,
	reducers: {
		setEmptySudoku: (state) => {
			const segments: Segment[] = [...Array(9).keys()].map(() => ({
				cells: [...Array(9).keys()].map(() => ({
					value: "",
					correctValue: "",
				})),
			}));

			state.segments = segments;
		},
		setSudokuGen: (state) => {
			const { puzzle, solution } = getSudoku(state.difficulty); // generates sudoku game

			const sudokuPuzzle = puzzle
				.split("")
				.map((cell, i) => ({ value: cell, correctValue: solution[i] })); // returns objects with sudoku value + sudoku correct value for each cell

			const segments: Segment[] = [...Array(9).keys()].map(() => ({
				cells: [],
			}));

			let currentSegmentIndex = 0;
			sudokuPuzzle.forEach((cell, i) => {
				segments[currentSegmentIndex].cells.push(cell);

				if (i % 3 === 2) {
					// change segment every 3 cells
					if (currentSegmentIndex % 3 === 2) {
						// if segment is 3rd in a row then:
						if (segments[currentSegmentIndex].cells.length === 9) {
							// if this row is full, change segment to first in a new row
							currentSegmentIndex += 1;
						} else {
							// if it's not full, return to first segment in a row
							currentSegmentIndex -= 2;
						}
					} else {
						// is its not the last segment in a row, just keep going in a row
						currentSegmentIndex++;
					}
				}
			});

			state.segments = segments;
		},
		setDifficulty: (state, action) => {
			const difficulty = action.payload;
			state.difficulty = difficulty === "" ? undefined : difficulty;
		},
	},
});

export const { setSudokuGen, setDifficulty, setEmptySudoku } =
	sudokuSlice.actions;

export default sudokuSlice.reducer;
