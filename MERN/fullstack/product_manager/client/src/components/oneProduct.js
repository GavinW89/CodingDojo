import React,{useState,useEffect} from "react"
import axios from "axios"
import { Link, useHistory, useParams } from "react-router-dom"

const OneProduct = (props) => {
    const {_id} = useParams();
    const history = useHistory();
    const [product, setProduct] = useState({})
    useEffect(() => { 
        axios.get(`http://localhost:8000/findOne/${_id}`)
            .then(res => {
                console.log(res)
                setProduct(res.data)
            })
            .catch(err => console.log(err))
    },[_id])

    const deleteHandler = () =>{
        if(window.confirm("Are you sure you want to remove this job?")){
            axios.delete(`http://localhost:8000/deleteProduct/` + _id)
            .then(res=>{
                console.log(res);
                history.push('/');
            })
            .catch(err =>console.log(err.response));
        };
    }

    return(
        <div>
            <Link to={"/"+_id+"/edit"}>EDIT</Link>
            <p>
            <Link to="/">Home</Link>
            </p>
            <h2>{product.title}</h2>
            <h3> Price: {product.price}</h3>
            <h3> {product.description}</h3>
            <button onClick={deleteHandler}>DELETE</button>
        </div>
    )
}

export default OneProduct;