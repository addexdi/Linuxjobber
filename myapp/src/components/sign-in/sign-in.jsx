import React from 'react';
import './sign-in.css';

const SignIn = () => {
    return (
        <div className='sign-in'>
        <h1>Have an account Already</h1>
        <h3>Sign in here!</h3>
        <form>
            <label htmlFor="email">Email</label>
                <input name="email" type="email"></input>
            <label htmlFor="password">Password</label>
                <input name="password" type="password"></input>
            <label htmlFor="text">Project Name</label>
                <input name="text" type="text"></input>
            <button>SIGN IN</button>
        </form>
        <p>Don't have an account? Sign Up</p>
    </div>
    )
}

export default SignIn;