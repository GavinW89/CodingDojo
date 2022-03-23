import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';

const SingleJob = (props) =>{
    const [job, setJob] = useState({});
    const {_id} = useParams();
    const history = useHistory();

    useEffect(()=>{
        axios.get("http://localhost:8000/api/jobs/" + _id)
            .then(res=>{
                console.log(res);
                setJob(res.data);
            })
            .catch(err=>{
                console.log(err.response);
            })
    }, [_id])

    const onDeleteHandler = () =>{
        if(window.confirm("Are you sure?")){
            axios.delete(`http://localhost:8000/api/jobs/${_id}`)
                .then(res=>{
                    console.log(res);
                    history.push("/");
                })
                .catch(err=>
                    console.log(err.response))
        }
    }

    return(
        <div className='w-75  p-5' style={{backgroundColor:job.color}}>
            <h1>{job.title} at {job.company}</h1>
            <h2>Salary: ${job.salary}</h2>
            <h2>Remote: {job.remote ? "yes" : "no"}</h2>
            <h2>Active? {job.active ? "yes" : "no"}</h2>

            <Link to={`/jobs/${_id}/edit`}>Edit</Link>
            <button onClick={onDeleteHandler}>Delete</button>
            <Link to={`/`}>Back</Link>
        </div>
    )
}

export default SingleJob;