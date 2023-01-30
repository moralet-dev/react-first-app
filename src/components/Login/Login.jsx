import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsContorls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {loginThunkCreator} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";
import s from './../common/FormsContorls/FormsControls.module.css'

const LoginForm = (props) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div className="">
                <Field placeholder={'Login'} validate={[required,]} name={'email'} component={Input}/>
            </div>
            <div className="">
                <Field placeholder={'password'} validate={[required,]} name={'password'} component={Input}
                       type={'password'}/>
            </div>
            <div className="">
                <Field component={Input} name={'rememberMe'} type={'checkbox'}/> remember me
            </div>
            {props.error &&
                <div className={s.form_summary_error}>
                    {props.error}
                </div>
            }

            <div className="">
                <button>Submit</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginThunkCreator(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuthenticated) return <Navigate to={'/profile'}/>
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
})
export default connect(mapStateToProps, {
    loginThunkCreator
})(Login)