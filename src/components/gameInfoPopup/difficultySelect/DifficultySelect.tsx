// redux
import { useDispatch } from "react-redux";
import { setDifficulty } from "../../../app/slices/sudokuSlice";

const DifficultySelect = () => {
	const dispatch = useDispatch();

	const handleDifficultyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		dispatch(setDifficulty(e.target.value));
	};

	return (
		<label className="difficulty_label">
			Difficulty:
			<select onChange={handleDifficultyChange} defaultValue={""}>
				<option value="">Random</option>
				<option value="easy">Easy</option>
				<option value="medium">Medium</option>
				<option value="hard">Hard</option>
				<option value="expert">Expert</option>
			</select>
		</label>
	);
};

export default DifficultySelect;
