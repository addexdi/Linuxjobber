import React from 'react';
import './sign-up.css';
import content from '../../static/index';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape(
    {
        fullname: yup.string().required().min(6),
        email: yup.string().required("Please enter a valid email"),
        password: yup.string().required("Please enter password").matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Must contain 8 Characters, One Uppercase, One Lowercase, One Number and One special case Character"
        )
    }
);

const SignUp = () => {

    const { register, handleSubmit, errors } = useForm(
        {
            resolver: yupResolver(schema)
        }
    );

    const onSubmit = (data) => console.log(data)

    return (
    <div className='sign-up'>
        <h1>Don't have an account?</h1>
        <h3>Sign up here!</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
            {content.inputs.map((input,key) => {
                return (
                    <div key={key}>
                        <label htmlFor={input.name}>{input.label}</label>
                        <br/>
                        <input type={input.type} name={input.name} ref={register} />
                        <br/>
                        <span className='message'>{errors[input.name]?.message}</span>
                    </div>
                )
            })}
            <label htmlFor="options">User Type</label>
                <select id="options">
                    <option value="Developer">Developer</option>
                    <option value="Owner">Owner</option>
                </select>

            <button>SIGN UP</button>
        </form>
        <p>Have an account? Sign In</p>
    </div>
    );
}

export default SignUp;