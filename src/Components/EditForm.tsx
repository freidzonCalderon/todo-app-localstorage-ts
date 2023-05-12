import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useTaskContext } from "../Context/ListTaskContext";

type EditFormProps = {
	show: boolean;
	handleClose: () => void;
	TaskID: number;
};

const EditForm: React.FC<EditFormProps> = ({ show, handleClose, TaskID }) => {
	const { tasks } = useTaskContext();

	console.log(tasks);

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
					<div className="flex items-center border-b-2 border-teal-500 py-2">
						{tasks.map((task) => (task.id === TaskID ? task.taskTitle : ""))}
						<input
							className="appearance-none bg-transparent border-none w-full text-gray-800 mr-3 py-1 px-2 leading-tight focus:outline-none"
							type="text"
							placeholder="Edit a task"
							required
						/>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="danger" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary">Save</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default EditForm;
