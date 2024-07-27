import { configureStore } from "@reduxjs/toolkit";

// slices
import sudokuReducer from "./slices/sudokuSlice";
import gameReducer from "./slices/gameSlice";

export const store = configureStore({
	reducer: {
		sudoku: sudokuReducer,
		game: gameReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
