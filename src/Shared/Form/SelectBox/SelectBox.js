import React, { Fragment } from 'react'

function SelectBox(props) {
    const { labelText, labelStyleClass,
        SelectStyleClass, SelectStyleId, name, value, readOnly, disabled, placeholder, optionData,
        onChange, onKeyDown, onKeyUp } = props
    return (
        <Fragment>
            {labelText && <label className={`form-label ${labelStyleClass}`} htmlFor={SelectStyleId} > {labelText}</label>}
            <select
                className={`form-select p-2 ${SelectStyleClass}`}
                id={SelectStyleId}
                name={name}
                value={value}
                disabled={disabled}
                readOnly={readOnly}
                onChange={onChange}
                onKeyDown={onKeyDown}
                onKeyUp={onKeyUp}
            >
                {placeholder && <option value=''> {placeholder} </option>}
                {optionData && optionData.map((elm, ind) => <option value={elm} key={ind}>{elm}</option>)}
            </select>
        </Fragment>
    )
}

SelectBox.defaultProps = {
    disabled: false,
    readOnly: false,
}

export default SelectBox


// <SelectBox
//     labelText={'Select Card Type'}
//     labelStyleClass={'d-block mb-1'}
//     SelectStyleId={"selectId1"}
//     SelectStyleClass={'border-1 border-gray-400'}
//     name={'cardtype'}
//     value={cardtype}
//     placeholder={"hello"}
//     optionData={["one", "Two", "Three"]}

//     disabled={true}
//     readOnly={true}
//     onChange={(e) => informationHandle(e)}
//     onKeyDown={(e) => informationHandle(e)}
//     onKeyUp={(e) => informationHandle(e)}
// />