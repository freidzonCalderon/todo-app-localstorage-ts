import React from "react";
import TodoItem from "./TodoItem";
// import { useTaskContext } from "../Context/ListTaskContext";

const ListTasks = () => {
	// const { tasks, addTask } = useTaskContext();

	// const localStorageArray = localStorage.getItem("tasks");
	// if (localStorageArray !== null) {
	// 	const tasksArray = JSON.parse(localStorageArray);
	// 	console.log(tasksArray);
	// } else {
	// 	console.log("No tasks in localStorage");
	// }

	// if (tasks.length === 0) {
	// addTask(localStorageArray);
	// }
	// console.log(localStorage.getItem("tasks"));

	// // console.log(tasks);

	return (
		<React.Fragment>
			<TodoItem />
			<TodoItem />
			<TodoItem />
			<TodoItem />
			<TodoItem />
			<TodoItem />
			<TodoItem />
		</React.Fragment>
	);
};

export default ListTasks;
