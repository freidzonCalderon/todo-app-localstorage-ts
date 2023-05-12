import React from "react";
import TodoItem from "./TodoItem";
import { useTaskContext } from "../Context/ListTaskContext";

const ListTasks = () => {
	const { tasks } = useTaskContext();

	return (
		<React.Fragment>
			{tasks.map((task) => (
				<li key={task.id} className="list-none">
					<TodoItem task={task} />
				</li>
			))}
		</React.Fragment>
	);
};

export default ListTasks;
