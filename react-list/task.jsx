import "./Task.css";
import { BsTrash, BsPencilFill } from "react-icons/bs"

export const Task = function ({ task, selfDelete }) {
    return (
        <div className="task">
            <div className="task-content">
                <strong>{task.content}</strong>
            </div>
            <div className="task-actions">
                <button className="task-action" onClick={selfDelete(task.id)}><BsPencilFill></BsPencilFill></button>

                <button className="task-action"><BsTrash></BsTrash></button>
            </div>
        </div>
    )s
}