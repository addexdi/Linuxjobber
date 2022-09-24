import React from 'react';
import './sign-in.css';

const SignIn = () => (
    <div className='sign-in'>
        <h1>Have an account Already</h1>
        <h3>Sign in here!</h3>
        <form>
            <label for="email">Email</label>
                <input name="email" type="email"></input>
            <label for="password">Password</label>
                <input name="password" type="password"></input>
            <label for="text">Project Name</label>
                <input name="text" type="text"></input>
            <button>SIGN IN</button>
        </form>
        <p>Don't have an account? Sign Up</p>
    </div>
)

export default SignIn;