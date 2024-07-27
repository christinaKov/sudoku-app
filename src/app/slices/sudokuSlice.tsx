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
		setSudokuGen: (state) => {
			const { puzzle, solution } = getSudoku(state.difficulty); // generates sudoku game

			const sudokuPuzzle = puzzle
				.split("")
				.map((cell, i) => ({ value: cell, correctValue: solution[i] })); // returns objects with sudoku value + sudoku correct value for each cell

			const segments: Segment[] = [];

			sudokuPuzzle.forEach((cell, i) => {
				const segmentIndex = Math.floor(i / 9);
				if (segments[segmentIndex]) {
					segments[segmentIndex].cells.push(cell);
				} else {
					segments[segmentIndex] = { cells: [cell] };
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

export const { setSudokuGen, setDifficulty } = sudokuSlice.actions;

export default sudokuSlice.reducer;
