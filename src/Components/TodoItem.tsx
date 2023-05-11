import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import EditForm from "./EditForm";

function TodoItem() {
	const [showEditForm, setShowEditForm] = useState(false);

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
						id="todoItem"
					/>
					<label className="mr-3 text-gray-100 text-3xl" htmlFor="todoItem">
						Clean car
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
					>
						<FaTrashAlt />
					</button>
				</div>
			</div>
			<EditForm show={showEditForm} handleClose={handleCloseEditForm} />
		</div>
	);
}

export default TodoItem;
