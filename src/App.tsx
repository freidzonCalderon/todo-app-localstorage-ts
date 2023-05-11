import React from "react";
import EditForm from "./Components/EditForm";
import TodoItem from "./Components/TodoItem";

function App() {
	return (
		<div className="App">
			<h1 className="text-center mt-20 text-zinc-100">My Task List</h1>
			<EditForm />
			<TodoItem />
		</div>
	);
}

export default App;
