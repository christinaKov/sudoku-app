// react
import { useEffect, useState } from "react";

// redux
import { useDispatch } from "react-redux";

// slices
import { Cell } from "../../app/slices/sudokuSlice";
import { handleMistake } from "../../app/slices/gameSlice";

const BoardCell = ({ cell }: { cell: Cell }) => {
	const dispatch = useDispatch();

	const [cellValue, setCellValue] = useState("");
	const [isCorrect, setIsCorrect] = useState<boolean>(true);

	useEffect(() => {
		const currentValue = cell.value === "-" ? "" : cell.value;
		setCellValue(currentValue);
	}, [cell]);

	const handleCellChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const nativeEvent = e.nativeEvent as InputEvent;
		const eventData = nativeEvent.data || "";

		if (eventData.match(/[0-9]+/) && eventData !== "") {
			setCellValue(eventData);
			checkIfCorrect(eventData);
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
				(isCorrect ? "is--correct" : "")
			}
			value={cellValue}
		/>
	);
};

export default BoardCell;
