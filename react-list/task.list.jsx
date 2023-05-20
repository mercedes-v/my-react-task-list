import { useState } from "react"
import { TaskModel } from "../models/taskModel"
import { Task } from "./Task";
import { NewTaskForm } from "./NewTaskForm";

import "./TaskList.css"
import { useEffect } from "react";

export function TaskList() {
    const [tasks, setTask] = useState([]);
    useEffect(() => {
    }, [tasks, setTask])
    const handleAddTask = (name) => {
        if (name.length > 0) {
            const task = new TaskModel(
                tasks.length,
                name
            )
            setTask([...tasks, task])
            console.log(tasks);
        } else {
            alert("Agrega contenido en el campo");
        }
    }
    const handleDeleteTask = (id) => {
        console.log(`task number ${id} deleted!!!`)
    }

    return (
        <div className="task-list">
            <NewTaskForm onAddTask={handleAddTask} />
            {
                tasks.length > 0 ? tasks.map((task) => { return <Task task={task} key={task.id} selfDelete={handleDeleteTask} /> }) : "no hay tareas"

            }
        </div>
    )
}