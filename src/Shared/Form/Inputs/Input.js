import React, { Fragment } from 'react';


function Input(props) {
    const {
        labelText, labelStyleClass, inputStyleId,
        inputStyleClass, autoComplete, type, name, value, placeholder, readOnly, disabled, ref,
        onChange, onKeyDown, onKeyUp } = props
    return (
        <Fragment>
            {labelText && <label className={`form-label ${labelStyleClass}`} htmlFor={inputStyleId} > {labelText}</label>}
            <input
                className={`form-control ${inputStyleClass}`}
                id={inputStyleId}
                autoComplete={autoComplete}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                readOnly={readOnly}
                disabled={disabled}
                ref={ref}
                onChange={onChange}
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
            />
        </Fragment>
    )
}


export default Input

Input.defaultProps = {
    AutoComplete: "off",
    type: "text",
    disabled: false,
    readOnly: false,
}

// <Input
// labelText = { 'Text With Label'}
// labelStyleClass = { 'd-block mb-1 fw-bold'}
// formStyleClass = { 'border1 bordercolor2_4'}
// inputStyleClass = { 'p-2'}
// inputStyleId = { 'inputid'}
// autoComplete = { 'on'}
// type = { 'text'}
// name = { 'firstname'}
// value = { 'Value Text'}
// placeholder = { 'Placeholder Text'}
// readOnly = { true}
// disabled = { true}
// ref={"domtext"}
// onChange = {() => { onChangeHandler() }}
// onKeyDown={ () => { onKeyDownHandler() }}
// onKeyUp={ () => { onKeyUpHandler() }}
// /> 