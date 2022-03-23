import React, { useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Main = (props) => {
    const [jobs,setJobs] = useState([])

    useEffect(() =>{
        axios.get("http://localhost:8000/AllJobs")
            .then(res => {
                console.log(res);
                setJobs(res.data)
            })
            .catch(err =>{
                console.log(err.response);
            })
    },[])

    const onDeleteHandler = (_id,arrIndex) => {
        axios.delete(`http://localhost:8000/deleteJob/` + _id)
            .then(res=>{
                console.log(res)
                const copyState = [...jobs];
                copyState.splice(arrIndex,1);
                setJobs(copyState)
            })
            .catch(err =>console.log(err.response))
    }

    return(
        <div className="w-75 mx-auto">
            <h1>Here are your jobs you applied for!</h1>
            <table className="table table-dark table-striped table-hover">
                <thead>
                    <tr>
                        <th>Job Title</th>
                        <th>Componay</th>
                        <th>Salary</th>
                        <th>Remote</th>
                        <th>Number of Positions</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        jobs.map((item,i)=> {
                            const style={
                                // backgroundColor: item.color,
                                opacity: item.active? 1 : 0.33
                            }
                            return <tr key={i} style={style}>
                                <td><Link to={"/oneJob/" + item._id}>{item.title}</Link></td>
                                <td>{item.company}</td>
                                <td>{item.salary}</td>
                                <td>{item.remote ? "yes" : "no"}</td>
                                <td>{item.numJobs}</td>
                                <td>Edit | <button onClick={() => onDeleteHandler(item._id,i)}>Delete</button></td>
                                </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Main;