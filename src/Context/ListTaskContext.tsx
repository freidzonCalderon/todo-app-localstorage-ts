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

	useEffect(() => {
		const savedTasks = localStorage.getItem("tasks");
		if (savedTasks) {
			setTasks(JSON.parse(savedTasks));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("tasks", JSON.stringify(tasks));
	}, [tasks]);

	const addTask = (task: InputTask) => {
		setTasks([...tasks, task]);
	};

	const removeTask = (taskId: number) => {
		setTasks(tasks.filter((task) => task.id !== taskId));
	};

	const toggleTask = (id: number) => {
		setTasks((prevTasks) =>
			prevTasks.map((task) =>
				task.id === id ? { ...task, isComplete: !task.isComplete } : task
			)
		);
	};

	return (
		<TaskContext.Provider value={{ tasks, addTask, removeTask, toggleTask }}>
			{children}
		</TaskContext.Provider>
	);
};
