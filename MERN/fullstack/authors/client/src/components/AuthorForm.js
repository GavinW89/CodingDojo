import React, {  useState } from 'react'

export default props => {
    const { initialName, onSubmitProp, error} = props;
    const [name, setName] = useState(initialName);
    const onSubmitHandler = e => {
        e.preventDefault();
        onSubmitProp({name});
    }
        
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Name</label>
                <p>{error.name && error.name.message}</p>
                
                <input 
                    type="text" 
                    name="name" value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
            </p>
            <input type="submit" />
        </form>
    )
}