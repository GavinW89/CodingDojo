import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const ToDo = (props) => {
    const [completed, setCompleted] = useState(false);
    return(
        <div className="border border-dark rounded border-3 p-3 bg-white text-dark text-wrap m-3">
            {
                completed?
                <h2 className="text-uppercase text-break"><del>{props.name}</del></h2>
                :
                <h2 className="text-uppercase text-break">{props.name}</h2>
            }
            <input type="checkbox" checked={completed} onChange={e => setCompleted(e.target.checked)} className="form-check-input align-middle me-2"/>
            <label className="form-check-label align-middle fs-3">Completed</label>
            <button onClick={props.onDelete} className="btn btn-danger ms-4">Delete</button>
        </div>
    )
}

export default ToDo;