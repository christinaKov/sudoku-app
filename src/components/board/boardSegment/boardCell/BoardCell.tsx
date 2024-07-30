// react
import { useEffect, useState } from "react";

// redux
import { useDispatch, useSelector } from "react-redux";

// slices
import { Cell } from "../../../../app/slices/sudokuSlice";
import { handleMistake } from "../../../../app/slices/gameSlice";
import { RootState } from "../../../../app/store";

const BoardCell = ({ cell }: { cell: Cell }) => {
	const dispatch = useDispatch();

	const gameMode = useSelector((state: RootState) => state.game.mode);

	const [cellValue, setCellValue] = useState(""); // value that displays in the cell
	const [isCorrect, setIsCorrect] = useState<boolean>(true); // boolean if that displayed value is true
	const [isChanged, setIsChanged] = useState(false); // boolean if user changed the value already. it used to set correct/incorrect class
	const [isCellDraft, setIsCellDraft] = useState(false); // boolean if value was changed in draft mode

	useEffect(() => {
		const currentValue = cell.value === "-" ? "" : cell.value; // checks if cell is empty by default
		setCellValue(currentValue); // sets empty cell OR default value if exists
		setIsCorrect(true); // sets that value is correct by default (user didnt change it yet)
	}, [cell]);

	const handleCellChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const nativeEvent = e.nativeEvent as InputEvent;
		const eventData = nativeEvent.data || "";

		if (eventData.match(/[0-9]+/) && eventData !== "") {
			setCellValue(eventData);
			setIsCellDraft(gameMode === "draft");
			setIsChanged(true);
			if (gameMode === "game") {
				checkIfCorrect(eventData);
			}
		}
	};

	const checkIfCorrect = (newValue: string) => {
		const isCorrect = cell.correctValue === newValue;
		setIsCorrect(isCorrect);

		if (!isCorrect) {
			dispatch(handleMistake());
		}
	};

	return (
		<input
			disabled={cell.value !== "-"}
			onInput={handleCellChange}
			className={
				"sudoku-cell " +
				(cell.correctValue === cell.value ? "" : "is--empty ") +
				(isCorrect ? "" : "is--incorrect ") +
				(isCorrect && isChanged ? "is--correct " : "") +
				(isCellDraft ? "is--draft" : "")
			}
			value={cellValue}
		/>
	);
};

export default BoardCell;
