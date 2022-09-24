import React from 'react';
import './sign-up.css';

const SignUp = () => (
    <div className='sign-up'>
        <h1>Don't have an account?</h1>
        <h3>Sign up here!</h3>
        <form>
            <label for="text">Full Name</label>
                <input name="text" type="text"></input>
            <label for="email">Email</label>
                <input name="email" type="email"></input>
            <label for="password">Password</label>
                <input name="password" type="password"></input>

            <label for="options">User Type</label>
                <select id="options">
                    <option value="Developer">Developer</option>
                    <option value="Owner">Owner</option>
                </select>

            <button>SIGN UP</button>
        </form>
        <p>Have an account? Sign In</p>
    </div>
)

export default SignUp;