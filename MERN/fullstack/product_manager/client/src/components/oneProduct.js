import React,{useState,useEffect} from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const OneProduct = (props) => {
    const {_id} = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => { 
        axios.get(`http://localhost:8000/findOne/${_id}`)
            .then(res => {
                console.log(res)
                setProduct(res.data)
            })
            .catch(err => console.log(err))
    },[])


    return(
        <div>
            <h2>{product.title}</h2>
            <h3> Price: {product.price}</h3>
            <h3> {product.description}</h3>
        </div>
    )
}

export default OneProduct;