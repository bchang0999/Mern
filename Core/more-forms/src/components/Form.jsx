import React, { useState } from 'react';

const Form = (props) => {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conPassword, setConPassword] = useState("");

    const [canRender, setCanRender] = useState(false);
    
    const createUser = (e) => {
        e.preventDefault();
        console.log(e);
        setCanRender(true);
        
    }
    const TextValid = input => {
        if(input.length < 2 && input.length >= 1){
            return false;
        }
        return true;
    }
    const EmailValid = input => {
        if(input.length < 5 && input.length >= 1){
            return false;
        }
        return true;
    }
    const PasswordValid = input => {
        if(input.length < 8 && password !== conPassword){
            return false;
        }
        return true;
    }
    const Compare = input => {
        if(password !== conPassword){
            return false;
        }
        return true;
    }
    return (
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>Firstname</label>
                    <input type="text" onChange={(e) => setfname(e.target.value)} />
                    {TextValid(fname) ? "" : <p>Field Must Be At Least 2 Characters</p>}
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" onChange={(e) => setlname(e.target.value)} />
                    {TextValid(fname) ? "" : <p>Field Must Be At Least 2 Characters</p>}
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                    {EmailValid(email) ? "" : <p>Email Must Be At Least 5 Characters</p>}
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                    {PasswordValid(conPassword) ? "" : <p>Password Must Be At Least 8 Characters</p>}
                    {Compare(conPassword) ? "" : <p>Passwords must match!</p>}
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={(e) => setConPassword(e.target.value)} />
                    {PasswordValid(conPassword) ? "" : <p>Password Must Be At Least 8 Characters</p>}
                    {Compare(conPassword) ? "" : <p>Passwords must match!</p>}
                </div>
                <input type="submit" value="Submit"/>
            </form>
            {
                canRender ? <div>
                    <h4>First Name: {fname}</h4>
                    <h4> Last Name: {lname}</h4>
                    <h4>Email: {email}</h4>
                    <h4>Password: {password}</h4>
                </div> : ""
            }
        </div>




    );

};

export default Form;