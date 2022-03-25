import React, { useEffect, useState} from 'react';
import axios  from 'axios';
import {Link} from 'react-router-dom';

const Main = (props) => {
    const [authors,setAuthors] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                console.log(res);
                setAuthors(res.data);
            })
            .catch(err => {
                console.log(err.response);
            })
    }, [])

    const onDeleteHandler = (_id,arrIndex) => {
        axios.delete(`http://localhost:8000/api/`+ _id)
            .then(res=>{
                console.log(res)
                const copyState = [...authors];
                copyState.splice(arrIndex,1);
                setAuthors(copyState)
            })
            .catch(err => console.log(err.response))
    }

    return(
        <div className="w-75 mx-auto">
            <Link to='/create'><button>Create Author</button></Link>
            <table className="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map((item,i)=> {
                            return <tr key={i}>
                                <td><Link to={"/api/authors" + item._id}>{item.name}</Link></td>
                                <td><Link to={'/edit/' + item._id}><button>Edit</button></Link> | <button onClick={() => onDeleteHandler(item._id,i)}>Delete</button></td>
                                </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Main;