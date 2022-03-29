import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';

export default props =>{
    const history = useHistory();
    const [error, setError] = useState({});
    // const [loaded, setLoaded] = useState(false)

    const createAuthor = (name) =>{
        axios.post('http://localhost:8000/api/authors', name)
            .then(res=>{
                console.log(res)
                console.log(name)
                history.push('/')
            })
            .catch(err => {
                // console.log(err)
                setError(err.response.data.error.errors)
                // console.log(err.response)
            })
    }

    return(
        <div>
            <AuthorForm onSubmitProp={createAuthor} initialName='' error={error}/>
            {/* <br />
            <p>{error.name && error.name.message}</p>
            <br /> */}
        </div>
    )
}