import React, {useEffect, useState} from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default props =>{
    const[form, setForm] = useState({
        title: "",
        price: 0,
        description: ""
    })

    const {_id} = useParams();

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => { 
        axios.get(`http://localhost:8000/findOne/${_id}`)
            .then(res => {
                console.log(res)
                setForm(res.data)
            })
            .catch(err => console.log(err))
    },[_id])

    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/updateProduct/${_id}`,form)
            .then(res=>console.log('Response ', res))
            .catch(err=>console.log('Error: ', err))
        console.log("form submited")
    }

    return(
        <div>
            <h1>EDIT</h1>
            <Link to="/">Home</Link>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Title: </label>
                    <input type="text" onChange={onChangeHandler} name="title" value={form.title}/>
                </p>
                <p>
                    <label>Price: </label>
                    <input type="number" onChange={onChangeHandler} name="price" value={form.price}/>
                </p>
                <p>
                    <label>Description: </label>
                    <input type="text" onChange={onChangeHandler} name="description" value={form.description}/>
                </p>
                <input type="submit" value="SUBMIT"/>
            </form>
        </div>
        
    )
}