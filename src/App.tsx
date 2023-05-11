import React from "react";
import TodoItem from "./Components/TodoItem";
import InputForm from "./Components/InputForm";
import EditForm from "./Components/EditForm";

function App() {
	return (
		<div className="App">
			<h1 className="text-center mt-20 text-zinc-100">My Task List</h1>
			<InputForm />
			<TodoItem />
		</div>
	);
}

export default App;
