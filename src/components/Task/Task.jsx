import React, { useState } from 'react';
import moment from 'moment';
import "./task.css";
import { useContext } from 'react';
import TaskContext from '../../context/TaskContext';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Task({ task, id }) {
    const { dispatch } = useContext(TaskContext);
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState({ title: task.title, description: task.description });

    const handleRemove = (e) => {
        e.preventDefault();
        dispatch({
            type: "REMOVE_TASK",
            id
        })
    }

    const handleMarkDone = (e) => {
        dispatch({
            type: "MARK_DONE",
            id
        })
    }

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleSave = () => {
        setIsEditing(false);
        dispatch({
            type: "UPDATE_TASK",
            id,
            updatedTask: editedTask
        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedTask(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    return (
        <div className='bg-slate-300 py-4 rounded-lg shadow-md flex items-center justify-center gap-2 mb-3'>
            <div className="mark-done">
                <input type="checkbox" className="checkbox" onChange={handleMarkDone} checked={task.completed} />
            </div>
            <div className="task-info text-slate-900 text-sm w-10/12">
                {isEditing ? (
                    <>
                        <input type="text" name="title" value={editedTask.title} onChange={handleChange} />
                        <textarea name="description" value={editedTask.description} onChange={handleChange} />
                    </>
                ) : (
                    <>
                        <h4 className="task-title text-lg capitalize">{task.title}</h4>
                        <p className="task-description">{task.description}</p>
                    </>
                )}
                <div className=' italic opacity-60'>
                    {
                        task?.createdAt ? (
                            <p>{moment(task.createdAt).fromNow()}</p>
                        ) : (
                            <p>just now</p>
                        )
                    }
                </div>
            </div>
            <div className="action-buttons">
                {isEditing ? (
                    <button onClick={handleSave}>Save</button>
                ) : (
                    <>
                        <EditIcon style={{ fontSize: 20, cursor: "pointer" }} onClick={handleEdit} />
                        <DeleteIcon style={{ fontSize: 20, cursor: "pointer" }} onClick={handleRemove} />
                    </>
                )}
            </div>
        </div>
    );
}

export default Task;