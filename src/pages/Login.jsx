// import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { app, auth } from '../firebase';
import {
   createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js'
import { useState } from 'react';
import { Navigate } from "react-router-dom";

export default function Login({ user }) {
    const [role, setRole] = useState(3);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [isSignUpActive, setIsSignUpActive] = useState(true);

    // function to change register to login or other way around
    const handleMethodChange = () =>  {
        setIsSignUpActive(!isSignUpActive)
    }
    // function to sign up user
    const handleSignUp = (event) => {
        event.preventDefault();
        if(roles[role] == undefined) {
            alert("Must Pick a Role!")
            return
        }
        if(!email || !password) return;
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // console.log(errorCode, errorMessage)
                alert(errorMessage);
                // ..
            });
        }
    // function for user to login
    const handleSignIn = (event) => {
        event.preventDefault();
        if(roles[role] == undefined) {
            alert("Must Pick a Role!")
            return
        }
        if(!email || !password) return;
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up
                const user = userCredential.user;
                console.log(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                //console.log(errorCode, errorMessage)
                alert(errorMessage)
                // ..
            });
    }

    const handleEmailChange = (event) => setEmail(event.target.value)
    const handlePasswordChange = (event) => setPassword(event.target.value)

    const roles = ["student", "teacher"]
    const lsb = document.querySelector("#lsb");
    const ltb = document.querySelector("#ltb");
    function studentRole(){
        setRole(0)
        lsb.style.backgroundColor = "blue";
        ltb.style.backgroundColor = "#f0f0f0";
    }
    function teacherRole(){
        setRole(1)
        lsb.style.backgroundColor = "#f0f0f0";
        ltb.style.backgroundColor = "blue";
    }
    if (user) {
        return <Navigate to={"/" + roles[role]}></Navigate>;
    }

    return (
        <div>
            <nav>
                <div className="logo">
                    <a href="/#">Rice Grades</a>
                </div>
            </nav>
            <form>
                <button id="lsb" type="button" onClick={studentRole}>student</button>
                <button id="ltb" type="button" onClick={teacherRole}>teacher</button>
            </form>
                <form>
                    {!isSignUpActive && <legend>Sign In</legend>}
                    {isSignUpActive && <legend>Sign Up</legend>}
                    <fieldset>
                        <ul>
                        {isSignUpActive && (
                            <>
                                <li>
                                    <label htmlFor="firstName">First Name:</label>
                                    <input type="text" id="firstName" required/>
                                </li>
                                <li>
                                    <label htmlFor="lastName">Last Name:</label>
                                    <input type="text" id="lastName" required/>
                                </li>
                            </>
                        )}
                            <li>
                                <label htmlFor="email">Email:</label>
                                <input type="text" id="email" onChange={handleEmailChange} required/>
                            </li>
                            <li>
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" onChange={handlePasswordChange} required/>
                            </li>
                        </ul>
                        {!isSignUpActive && <button type="submit" onClick={handleSignIn}>Sign In</button>}
                        {isSignUpActive && <button type="submit" onClick={handleSignUp}>Sign Up</button>}
                    </fieldset>
                    {!isSignUpActive && <a onClick={handleMethodChange}>Create an account</a>}
                    {isSignUpActive && <a onClick={handleMethodChange}>Login</a>}
                </form>
            <Footer />
        </div>
    )
     // redirect user to student page after login
}


