import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TextInput extends Component {
    render() {

        const { className, placeholder, onChange, value } = this.props

        return (
            <input className={className} type="text" autoFocus placeholder={placeholder} onChange={onChange} value={value}/>
        )
    }
}

TextInput.PropTypes = {
    placeholder: PropTypes.string,
    onChange: PropTypes.function,
    className: PropTypes.string,
    value: PropTypes.string
}
