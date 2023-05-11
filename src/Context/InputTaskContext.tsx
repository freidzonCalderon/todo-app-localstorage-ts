import React, { useState, useContext } from "react";

export interface InputTask {
	taskTitle: string;
	isComplete: boolean;
	id: number;
}

export interface InputContextType {
	inputTask: InputTask;
	setInputTask: (task: InputTask) => void;
}

export interface Props {
	children: React.ReactNode;
}

const InputContext = React.createContext<InputContextType>({
	inputTask: {
		taskTitle: "",
		isComplete: false,
		id: Math.random() * 10,
	},
	setInputTask: () => {},
});

export const useInputContext = () => {
	return useContext(InputContext);
};

export const InputProvider = ({ children }: Props) => {
	const [inputTask, setInputTask] = useState<InputTask>({
		taskTitle: "",
		isComplete: false,
		id: Math.random() * 10,
	});

	return (
		<InputContext.Provider value={{ inputTask, setInputTask }}>
			{children}
		</InputContext.Provider>
	);
};
