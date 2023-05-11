import React from "react";
import TodoItem from "./Components/TodoItem";
import InputForm from "./Components/InputForm";
import EditForm from "./Components/EditForm";
import { InputProvider } from "./Context/InputTaskContext";
import { TaskProvider } from "./Context/ListTaskContext";

function App() {
	return (
		<InputProvider>
			<TaskProvider>
				<div className="App">
					<h1 className="text-center mt-20 text-zinc-100">My Task List</h1>
					<InputForm />
					<TodoItem />
					<TodoItem />
				</div>
			</TaskProvider>
		</InputProvider>
	);
}

export default App;
