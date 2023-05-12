import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useTaskContext } from "../Context/ListTaskContext";

type EditFormProps = {
	show: boolean;
	handleClose: () => void;
	TaskID: number;
};

const EditForm: React.FC<EditFormProps> = ({ show, handleClose, TaskID }) => {
	const { tasks, updateTaskTitle } = useTaskContext();

	const taskToUpdate = tasks.find((task) => task.id === TaskID);

	const [updatedTaskName, setUpdatedTaskName] = React.useState<string>(
		taskToUpdate?.taskTitle ?? ""
	);

	const handleSave = () => {
		updateTaskTitle(TaskID, updatedTaskName);
		handleClose();
	};

	return (
		<>
			<Modal
				show={show}
				onHide={handleClose}
				backdrop="static"
				keyboard={false}
			>
				<Modal.Header closeButton>
					<Modal.Title>Edit Mode</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<form>
						<div className="flex items-center border-b-2 border-teal-500 py-2">
							<input
								className="appearance-none bg-transparent border-none w-full text-gray-800 mr-3 py-1 px-2 leading-tight focus:outline-none"
								type="text"
								placeholder="Edit a task"
								required
								onChange={(e) => setUpdatedTaskName(e.target.value)}
								value={updatedTaskName}
							/>
						</div>
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="danger" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleSave}>
						Save
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default EditForm;
