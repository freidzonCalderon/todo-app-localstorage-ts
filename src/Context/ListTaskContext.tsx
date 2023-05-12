import React, { createContext, useContext, useState, useEffect } from "react";
import { InputTask } from "./InputTaskContext";

export interface TaskContextType {
	tasks: InputTask[];
	addTask: (task: InputTask) => void;
	removeTask: (taskId: number) => void;
	toggleTask: (id: number) => void;
}

const TaskContext = createContext<TaskContextType>({
	tasks: [],
	addTask: () => {},
	removeTask: () => {},
	toggleTask: () => {},
});

export const useTaskContext = () => {
	return useContext<TaskContextType>(TaskContext);
};

interface Props {
	children: React.ReactNode;
}

export const TaskProvider = ({ children }: Props) => {
	const [tasks, setTasks] = useState<InputTask[]>([]);

	const addTask = (task: InputTask) => {
		const updatedTasks = [...tasks, task];
		setTasks(updatedTasks);
		localStorage.setItem("tasks", JSON.stringify(updatedTasks));
	};

	const removeTask = (taskId: number) => {
		const updatedTasks = tasks.filter((task) => task.id !== taskId);
		setTasks(updatedTasks);
		localStorage.setItem("tasks", JSON.stringify(updatedTasks));
	};

	const toggleTask = (id: number) => {
		const updatedTasks = tasks.map((task) =>
			task.id === id ? { ...task, isComplete: !task.isComplete } : task
		);
		setTasks(updatedTasks);
		localStorage.setItem("tasks", JSON.stringify(updatedTasks));
	};

	return (
		<TaskContext.Provider value={{ tasks, addTask, removeTask, toggleTask }}>
			{children}
		</TaskContext.Provider>
	);
};
