import React, { useEffect, useState} from 'react';
import axios  from 'axios';
import {Link} from 'react-router-dom';


const Main = (props) => {
    const [pirate,setPirate] = useState([])

    useEffect(() =>{
        axios.get('http://localhost:8000/api/pirates')
            .then(res => {
                console.log(res);
                setPirate(res.data);
            })
            .catch(err => {
                console.log(err.response);
            })
    }, [])

    const onDeleteHandler = (_id,arrIndex) => {
        axios.delete(`http://localhost:8000/api/`+ _id)
            .then(res=>{
                console.log(res)
                const copyState = [...pirate];
                copyState.splice(arrIndex,1);
                setPirate(copyState)
            })
            .catch(err => console.log(err.response))
    }

    return(
        <div className="w-75 mx-auto">
            <Link to='/create'><button>Create Pirate</button></Link>
            <table className="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th>Profile Picture</th>
                        <th>Pirates</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        pirate.map((item,i)=> {
                            return <tr key={i}>
                                <td><img src={item.url} alt="pirate image" className='img-thumbnail' width="200" height="200"/></td>
                                <td><Link to={"/view/" + item._id}>{item.name}</Link></td>
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