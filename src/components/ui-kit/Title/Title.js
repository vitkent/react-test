import React from 'react'
import './Title.scss'

const Title = props => {

    const CustomTag = props.type;

    return (
        <CustomTag className={['title', ...props.classMod].join(' ')} dangerouslySetInnerHTML={{__html:props.title}}/>
    )
}

Title.defaultProps = {
    classMod: []
}

export default Title