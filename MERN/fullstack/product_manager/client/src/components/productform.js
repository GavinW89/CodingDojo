import React, {useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default props =>{
    const history = useHistory();
    const[form, setForm] = useState({
        title: "",
        price: 0,
        description: ""
    })

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/create',form)
            .then(res=>{
                console.log('Response ', res)
                history.push('/')
            })
            .catch(err=>console.log('Error: ', err))
        console.log("form submited")
    }

    return(
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title: </label>
                <input type="text" onChange={onChangeHandler} name="title"/>
            </p>
            <p>
                <label>Price: </label>
                <input type="number" onChange={onChangeHandler} name="price"/>
            </p>
            <p>
                <label>Description: </label>
                <input type="text" onChange={onChangeHandler} name="description"/>
            </p>
            <input type="submit" value="SUBMIT"/>
        </form>
    )
}

