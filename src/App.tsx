import InputForm from "./Components/InputForm";
import { InputProvider } from "./Context/InputTaskContext";
import { TaskProvider } from "./Context/ListTaskContext";
import ListTasks from "./Components/ListTasks";

function App() {
	return (
		<InputProvider>
			<TaskProvider>
				<div className="App">
					<h1 className="text-center mt-20 text-zinc-100">My Task List</h1>
					<InputForm />
					<ListTasks />
				</div>
			</TaskProvider>
		</InputProvider>
	);
}

export default App;
