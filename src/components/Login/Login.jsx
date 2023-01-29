import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsContorls/FormsControls";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return(
        <form action="" onSubmit={props.handleSubmit}>
            <div className="">
                <Field  placeholder={'Login'} validate={[required,]} name={'login'} component={Input}/>
            </div>
            <div className="">
                <Field placeholder={'password'} validate={[required,]} name={'password'} component={Input} type={'password'}/>
            </div>
            <div className="">
                <Field component={Input} name={'rememberMe'} type={'checkbox'} /> remember me
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