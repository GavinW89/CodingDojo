import React, { useState } from 'react';
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [conPassword, setConPassword] = useState("");
    const [fnameError, setFnameError] = useState("");
    const [lnameError, setLnameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [conPasswordError, setConPasswordError] = useState("");
    
    const handleFnameError = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFnameError("First name is required!");
        } else if(e.target.value.length < 3) {
            setFnameError("First name must be more than 3 characters!")
        }else{
            setFnameError("")
        }
    }
    const handleLnameError = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLnameError("Last name is required!");
        } else if(e.target.value.length < 3) {
            setLnameError("Last name must be more than 3 characters!")
        }else{
            setLnameError("")
        }
    }
    const handleEmailError = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 5) {
            setEmailError("Email be more than 5 characters!")
        }else{
            setEmailError("")
        }
    }
    const handlePasswordError = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        }else if(e.target.value.length < 8) {
            setPasswordError("Password be more than 8 characters!")
            
        }else{
            setPasswordError("")
        }
    }
    const handleConPasswordError = (e) => {
        setConPassword(e.target.value);
        if(e.target.value !== password){
            setConPasswordError("Passwords do not match!")
        }else{
            setConPasswordError("")
        }
    }

    return(
        <div>
        <form onSubmit={ (e) => e.preventDefault() }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ handleFnameError }/>
                {
                    fnameError ? <p style={{color: 'red'}}>{ fnameError }</p>
                    : ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ handleLnameError } />
                {
                    lnameError ? <p style={{color: 'red'}}>{ lnameError }</p>
                    : ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ handleEmailError } />
                {
                    emailError ? <p style={{color: 'red'}}>{ emailError }</p>
                    : ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ handlePasswordError } />
                {
                    passwordError ? <p style={{color: 'red'}}>{ passwordError }</p>
                    : ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ handleConPasswordError } />
                {
                    conPasswordError ? <p style={{color: 'red'}}>{ conPasswordError }</p>
                    : ''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {conPassword}</p>

        </div>
    );
};
    
export default UserForm;