import React, { useState } from 'react';

const Form = (props) => {
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [conpassword, setconPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { fname, lname, email, password, conpassword };
        console.log("Welcome", newUser);
    }

    return (
        <div>
            <form onSubmit={createUser}>
                <div>
                    <label>Firstname</label>
                    <input type="text" onChange={(e) => setfname(e.target.value)} />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" onChange={(e) => setlname(e.target.value)} />
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <label>confirm Password: </label>
                    <input type="password" onChange={(e) => setconPassword(e.target.value)} />
                </div>
            </form>

            <h3>Your Form Data</h3>
            <div>
                <p>First Name: {fname}</p>
                <p>Last Name: {lname}</p>
                <p>Email: {email}</p>
                <p>Password: {password}</p>
            </div>
        </div>




    );

};

export default Form;