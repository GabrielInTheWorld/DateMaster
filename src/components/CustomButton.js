import React from 'react'
import {StyleSheet, Button} from 'react-native'
import PropTypes from 'prop-types'

export default class CustomButton extends React.Component{
    render(){
        const {title, onPress, style} = this.props
        // console.log("style", style, styles[style])
        return(
            <Button title={title} onPress={onPress} color={styles[style]}/>
        )
    }
}

CustomButton.defaultProps = {
    style: "primary"
}

CustomButton.propTypes = {
    title: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    style: PropTypes.oneOf([
        "success",
        "danger",
        "error",
        "info",
        "primary",
        "secondary"
    ])
}

const styles = {
    success: "#0F0",
    danger: "#FF0",
    error: "#F00",
    info: "#AEF",
    primary: "#00F",
    secondary:"#CCC"
}