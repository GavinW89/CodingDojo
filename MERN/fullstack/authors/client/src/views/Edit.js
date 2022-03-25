import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';

export default props =>{
    const history = useHistory();
    const {_id} = useParams();
    const [author,setAuthor] =  useState({})
    const [loaded, setLoaded] = useState(false)
    useEffect(()=>{
        axios.get(`http://localhost:8000/api/${_id}`)
            .then(res=>{
                console.log(res.data)
                setAuthor(res.data)
                console.log(author)
                setLoaded(true)
            })
            .catch(err =>{console.log(err.response)})
    },[_id])

    const editAuthor = (name) =>{
        axios.patch(`http://localhost:8000/api/${_id}`, name)
            .then(res=>{
                console.log(res)
                history.push('/')
            })
            .catch(err => {console.log(err.response)})
    }

    return(
        <div>
            {
                loaded && <AuthorForm onSubmitProp={editAuthor} initialName={author.name}/>
            }
        </div>
        
    )
}