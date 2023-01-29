import React from "react";
import s from './FormsControls.module.css'

const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={`${s.form_control} ${hasError ? s.error : ''}` }>
            <div className="">
                {props.children}
            </div>
            <div className="">
                { hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props) =>{
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}></textarea></FormControl>
}
export const Input = (props) =>{
    const {input, meta, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}