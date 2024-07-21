const BoardCell = ({ cell }: { cell: number }) => {
	return <div className="sudoku-cell">{cell}</div>;
};

export default BoardCell;
