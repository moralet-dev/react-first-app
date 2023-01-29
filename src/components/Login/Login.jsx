import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
    return(
        <form action="" onSubmit={props.handleSubmit}>
            <div className="">
                <Field  placeholder={'Login'} name={'login'} component={'input'}/>
            </div>
            <div className="">
                <Field placeholder={'password'} name={'password'} component={'input'}/>
            </div>
            <div className="">
                <Field component={'input'} name={'rememberMe'} type={'checkbox'} /> remember me
            </div>
            <div className="">
                <button>Submit</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
      console.log(formData)
    }
    
    return(
        <div>
        <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login