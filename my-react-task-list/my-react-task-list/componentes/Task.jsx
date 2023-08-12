function Task(props){

    const {id, taskname, description, completed, onModificarElemento} = props;


    function handleClickDiscarded() {
        alert(`The task ${taskname} has been discarded.`)
    }

    return (
        <li>
            <input type="checkbox"
                name={taskname}  
                onClick={() => {onModificarElemento(id)}}
                onChange={() => {}}
                checked = {completed}
            />
            <label><h3>{taskname}</h3></label>
            <label> <p>{description}</p></label>
            <button onClick={handleClickDiscarded}>Discard task</button>
        </li>
    );
}

export default Task;