import React from 'react'

const InputBox = ({ fieldType, fieldPlaceholder, fieldName, styles, handleChange, value }) => {
    return (
        <>
            <input
                type={fieldType}
                name={fieldName}
                placeholder={fieldPlaceholder}
                className={`${styles}`}
                onChange={handleChange}
                value={value}
            />
        </>
    )
}

export default InputBox
