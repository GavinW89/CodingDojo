import ProductBox from "../components/allProducts"
import React,{useState,useEffect} from "react"
import axios from "axios"
import {Link} from "react-router-dom"


const Main = () => {
    const [products, setProducts] = useState([])
    useEffect(() => { 
        axios.get("http://localhost:8000/findAll")
            .then(res => {
                console.log(res)
                setProducts(res.data)
            })
            .catch(err => console.log(err))
    },[])


    return(
        <div className="app">
            <ul>
                {
                    products.map((item,i)=> {
                        return <Link to={"/"+ item._id} ><ProductBox key={i} product={item}/></Link>
                    })
                }
            </ul>
        </div>
    )
}

export default Main