import { createSlice } from "@reduxjs/toolkit";

interface Cell {
	value: number;
}

interface Segment {
	cells: Cell[];
}

export interface SegmentsState {
	basicSegments: Segment[];
	randomSegments: Segment[];
}

const initialState: SegmentsState = { basicSegments: [], randomSegments: [] };

export const segmentsSlice = createSlice({
	name: "segments",
	initialState,
	reducers: {
		setDefaultSegments: (state) => {
			const cells = Array.from(Array(9).keys(), (x) => ({ value: x + 1 }));
			const segments = Array.from(Array(9).keys()).map(() => ({
				cells,
			}));
			state.basicSegments = segments;
			state.randomSegments = segments;
		},
		randomiseSegments: (state) => {
			state.basicSegments.forEach((segment, i) => {
				const generatedCells: Cell[] = []; // new randomized list
				const usedIndex: number[] = []; // indexes that were used as random

				segment.cells.forEach((cell) => {
					const randomI = Math.floor(Math.random() * 9); // creates new random index

					// checks if this id was used in random array
					if (!usedIndex.includes(randomI)) {
						generatedCells[randomI] = { value: cell.value }; // if no, sets current cell value to this random index
						usedIndex.push(randomI); // adds index to used index list
					} else {
						// if the index was used,
						// gets list of unused indexes
						const unusedIndex = [...Array.from(Array(9).keys())].filter(
							(index) => !usedIndex.includes(index)
						);
						usedIndex.push(unusedIndex[0]); // sets current cell value to first unused index
						generatedCells[unusedIndex[0]] = { value: cell.value }; // adds index to used index list
					}
				});

				state.randomSegments[i].cells = generatedCells; // sets random list to randomCells list
			});
		},
	},
});

export const { setDefaultSegments, randomiseSegments } = segmentsSlice.actions;

export default segmentsSlice.reducer;
