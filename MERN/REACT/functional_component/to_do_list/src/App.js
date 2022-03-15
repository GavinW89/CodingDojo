import React, {useState} from 'react';
import './App.css';
import ToDo from './components/to_do';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [toDo,setToDo] = useState([])
  const [form, setForm] = useState("")
  const submitHandler = (event) => {
    event.preventDefault();
    const newToDo = [...toDo, form];
    setToDo(newToDo);
    setForm("");
  }

  const onDeleteHandler = (index) => {
    const newToDo = [...toDo];
    newToDo.splice(index,1)
    setToDo(newToDo)
  }

  return (
    <div className="App" onSubmit={submitHandler}>
      <h1 className='display-1 fw-bolder'><u>To Do Lists</u></h1>
      <form className='mb-3'>
        <input type="text" name="to-do" className="form-control m-3 border border-dark" value={form} onChange={(event) =>{setForm(event.target.value)}} />
        <input type="submit" value="Add" className='btn btn-primary'/>
      </form>
      <div>
        {
        toDo.map((item,i)=>{
          return <ToDo key={i} name={item} className="border border-success" onDelete={() => {onDeleteHandler(i)}}/>
        })
      }
      </div>
      
    </div>
  );
}

export default App;
