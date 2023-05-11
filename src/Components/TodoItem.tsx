import { useState } from "react";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

function TodoItem() {
	return (
		<div className="container mt-10">
			<div className="flex justify-between items-center border-b-2 border-teal-500 py-2">
				<div className="flex items-center">
					<input className="mr-3" type="checkbox" title="todoCheck" />
					<h2 className="mr-3 text-gray-100">Clean car</h2>
				</div>
				<div className="buttons">
					<button
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded mr-2"
						title="Edit"
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
		</div>
	);
}

export default TodoItem;
