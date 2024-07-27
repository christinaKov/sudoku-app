import { createSlice } from "@reduxjs/toolkit";

export interface Game {
	mistakesCounter: number;
	status: string;
}

const initialState: Game = {
	mistakesCounter: 0,
	status: "in-progress",
};

export const gameSlice = createSlice({
	name: "game",
	initialState,
	reducers: {
		handleMistake: (state) => {
			state.mistakesCounter = state.mistakesCounter + 1;
			if (state.mistakesCounter >= 3) {
				state.status = "over";
			}
		},
	},
});

export const { handleMistake } = gameSlice.actions;

export default gameSlice.reducer;
