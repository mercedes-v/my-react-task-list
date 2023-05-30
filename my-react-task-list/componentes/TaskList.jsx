import { useEffect, useState } from "react";
import Task from "./Task";

function Taskslist(props){
    let list = [
        {id: 1, taskname: "Example task 1", description: "task's 1 description",completed: true},
    ]
    const cargaAuxiliar = JSON.parse(window.localStorage.getItem("lista"));

    const [miLista, setMiLista] = useState(cargaAuxiliar ? cargaAuxiliar : list)


    const handleModificarElemento = (id) => {
        const listaModificada = miLista.map((iteracion)=> {
            if (iteracion.id === id) {
                return {...iteracion,completed: !iteracion.completed}
            } else {
                return iteracion;
            }
        })
        setMiLista(listaModificada);
        localStorage.setItem("lista", JSON.stringify(listaModificada))
    }


    return (
        <ul>
            {
                miLista.map((task) => (
                <Task 
                key = {task.id}
                id={task.id}
                taskname ={task.taskname}
                description = {task.description}
                completed = {task.completed}
                onModificarElemento = {handleModificarElemento}
                />
                ))
            }

        </ul>

    );
}

export default Taskslist;