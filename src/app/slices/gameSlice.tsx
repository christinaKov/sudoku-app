import { createSlice } from "@reduxjs/toolkit";

type GameStatus = "not-started" | "in-progress" | "game-over";

export interface Game {
	mistakesCounter: number;
	status: GameStatus;
}

const initialState: Game = {
	mistakesCounter: 0,
	status: "not-started",
};

export const gameSlice = createSlice({
	name: "game",
	initialState,
	reducers: {
		handleMistake: (state) => {
			state.mistakesCounter = state.mistakesCounter + 1;
			if (state.mistakesCounter >= 3) {
				state.status = "game-over";
			}
		},
		createNewGame: (state) => {
			state.status = initialState.status;
		},
		startNewGame: (state) => {
			state.status = "in-progress";
			state.mistakesCounter = initialState.mistakesCounter;
		},
	},
});

export const { handleMistake, createNewGame, startNewGame } = gameSlice.actions;

export default gameSlice.reducer;
