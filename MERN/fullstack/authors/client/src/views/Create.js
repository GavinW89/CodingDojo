import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AuthorForm from '../components/AuthorForm';

export default props =>{
    const history = useHistory();

    const createAuthor = (name) =>{
        axios.post('http://localhost:8000/api/authors', name)
            .then(res=>{
                console.log(res)
                history.push('/')
            })
            .catch(err => {console.log(err.response)})
    }

    return(
        <AuthorForm onSubmitProp={createAuthor} initialName=''/>
    )
}