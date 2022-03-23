import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";


const SingleJob = (props) => {
    const {_id} = useParams();
    const [job, setJob] = useState({});
    const history = useHistory();

    useEffect(()=>{
        axios.get(`http://localhost:8000/oneJob/` + _id)
            .then(res=>{
                console.log(res.data.oneJob)
                setJob(res.data.oneJob)
            })
            .catch(err=>{
                console.log(err.response)
            })
    },[_id]);

    const onDeleteHandler = () => {
        if(window.confirm("Are you sure you want to remove this job?")){
            axios.delete(`http://localhost:8000/deleteJob/` + _id)
            .then(res=>{
                console.log(res);
                history.push('/');
            })
            .catch(err =>console.log(err.response));
        };
    }


    return(
        <div>
            <h1>{job.title} at {job.company}</h1>
            <button onClick={onDeleteHandler}>DELETE</button>
        </div>
    )
}

export default SingleJob;