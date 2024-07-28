import { createSlice } from "@reduxjs/toolkit";

type GameStatus = "in-progress" | "game-over";

export interface Game {
	mistakesCounter: number;
	status: GameStatus;
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
				state.status = "game-over";
			}
		},
		resetGame: (state) => {
			state.mistakesCounter = initialState.mistakesCounter;
			state.status = initialState.status;
		},
	},
});

export const { handleMistake, resetGame } = gameSlice.actions;

export default gameSlice.reducer;
