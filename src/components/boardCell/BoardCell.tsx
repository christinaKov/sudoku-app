import { Cell } from "../../app/sudokuSlice";

const BoardCell = ({ cell }: { cell: Cell }) => {
	return <div className="sudoku-cell">{cell.value}</div>;
};

export default BoardCell;
