import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import EditForm from "./EditForm";
import { InputTask } from "../Context/InputTaskContext";
import { useTaskContext } from "../Context/ListTaskContext";

interface TodoItemProps {
	task: InputTask;
}

const TodoItem = ({ task }: TodoItemProps) => {
	const [showEditForm, setShowEditForm] = useState(false);
	const { removeTask, toggleTask } = useTaskContext();

	const handleShowEditForm = () => {
		setShowEditForm(true);
	};

	const handleCloseEditForm = () => {
		setShowEditForm(false);
	};

	return (
		<div className="container mt-10">
			<div className="flex justify-between items-center border-b-2 border-teal-500 py-2">
				<div className="flex items-center">
					<input
						className="mr-3"
						type="checkbox"
						title="todoCheck"
						id={`${task.id}`}
						checked={task.isComplete}
						onChange={() => toggleTask(task.id)}
					/>
					<label
						className={
							task.isComplete
								? "line-through mr-3 text-gray-500 text-3xl"
								: "mr-3 text-gray-100 text-3xl"
						}
						htmlFor={`${task.id}`}
					>
						{task.taskTitle}
					</label>
				</div>
				<div className="buttons">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded mr-2"
						title="Edit"
						onClick={handleShowEditForm}
					>
						<FaEdit />
					</button>
					<button
						className="bg-red-500 hover:bg-red-700 text-white font-bold p-2 rounded"
						title="Remove"
						onClick={() => removeTask(task.id)}
					>
						<FaTrashAlt />
					</button>
				</div>
			</div>
			<EditForm show={showEditForm} handleClose={handleCloseEditForm} TaskID={task.id}/>
		</div>
	);
};

export default TodoItem;
