import { configureStore } from "@reduxjs/toolkit";

// slice
import segmentsReducer from "./sudokuSegmentsSlice";

export const store = configureStore({
	reducer: {
		segments: segmentsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
