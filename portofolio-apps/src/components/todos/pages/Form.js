import React from "react";
import '../layout/todoStyle.css'

const Form = () =>{
    return(
        <form>
            <input type="text" placeholder="enter a task todo" className="task-input" />
            <button className="button-add" type="submit">add</button>
        </form>
    )
}
export default Form