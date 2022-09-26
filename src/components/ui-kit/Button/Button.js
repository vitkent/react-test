import React from 'react'
import './Button.scss'

const Button = props => {
    const CustomTag = props.tag;

    return (
        <CustomTag className={['button', ...props.mod].join(' ')} onClick={props.onClick}>
            <span className='button__text'>{props.text}</span>
        </CustomTag>
    )
}

// пустые строки, что бы undefined не было
Button.defaultProps = {
    mod: [],
    tag: 'button'
}

export default Button