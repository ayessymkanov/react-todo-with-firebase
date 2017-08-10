import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Button extends Component {
    render() {
        const { onClick, text, className } = this.props

        return (
            <button className={className} onClick={onClick}>
                {text}
            </button>
        )
    }
}

Button.PropTypes = {
    text: PropTypes.string,
    onClick: PropTypes.function,
    className: PropTypes.string
}
