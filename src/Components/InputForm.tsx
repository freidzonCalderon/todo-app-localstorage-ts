import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useInputContext } from "../Context/InputTaskContext";
import { useTaskContext } from "../Context/ListTaskContext";

const InputForm = () => {
	const { inputTask, setInputTask } = useInputContext();
	const { tasks, addTask } = useTaskContext();

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// console.log(inputTask);
		addTask(inputTask);
		// console.log(tasks);

		const newInputTask = {
			taskTitle: "",
			isComplete: false,
			id: Math.random() * 10,
		};
		setInputTask(newInputTask);
	};

	return (
		<div className="flex flex-col items-center justify-center">
			<form onSubmit={handleSubmit} className="w-full max-w-sm">
				<div className="flex items-center border-b-2 border-teal-500 py-2">
					<input
						className="appearance-none bg-transparent border-none w-full text-gray-200 mr-3 py-1 px-2 leading-tight focus:outline-none"
						type="text"
						placeholder="Type a task"
						required
						onChange={(e) => {
							setInputTask({ ...inputTask, taskTitle: e.target.value });
						}}
						value={inputTask.taskTitle}
					/>
					<button
						className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
						type="submit"
						title="Add"
					>
						<FaPlus />
					</button>
				</div>
			</form>
		</div>
	);
};

export default InputForm;
