
import task from "./task.js"


const DisplayTodos = () => {
    return(
        <>
            {
                task.map((todo, index) => {
                    return <li key={index}>{todo.task}</li>
                })
            }
        </>
    );
}

export default DisplayTodos;