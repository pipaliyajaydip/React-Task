import { useState } from "react";
import Input from "./input";
import task from "./task.js"
let i=10;
const Todo = () => {

    const [todo, setTodo] = useState("");

    const handleChange = (e) => {
        setTodo( e.target.value)
    }

       

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(todo);
        task.push(todo);
        setTodo("");
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <Input name="Task" type="text"  onChange={handleChange} />
                <button>Add</button>
            </form>
        </>
    );
}

export default Todo;