import { useEffect, useState } from "react";
import { Cell } from "../../app/sudokuSlice";

const BoardCell = ({ cell }: { cell: Cell }) => {
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
			setIsCorrect(cell.correctValue === eventData);
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
