import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Alert, View, Text, StyleSheet} from 'react-native'
import MainStyle from "../../style/MainStyle";

export default class TabBar extends Component{
    constructor(props){
        super()
        this.state = {
            active: 0
        }
    }

    getTitles = () => {
        const {titles} = this.props
        const {active} = this.state
        const titleStyle = MainStyle.getTabBarStyle(titles.length)
        return titles.map((title, index) => {
            return (
                <View key={index} style={titleStyle.titleView}>
                    <Text
                        onPress={() => this.switchActiveView(index)}
                        style={{color: "#FFF"}}>{title}</Text>
                </View>
            )
        })
    }

    switchActiveView = (index) => {
        this.setState({active: index})
    }

    render(){
        console.log("rendered TabBar")
        const {containers} = this.props
        const {active} = this.state
        return(
            <View style={styles.container}>
                <View style={styles.toolbar}>
                    {this.getTitles()}
                </View>
                <View style={styles.child}>
                    <View style={styles.content}>
                        {containers[active]}
                    </View>
                </View>
            </View>
        )
    }
}

TabBar.propTypes = {
    titles: PropTypes.arrayOf(PropTypes.string).isRequired,
    containers: PropTypes.arrayOf(PropTypes.node).isRequired
}

const styles = (length) = StyleSheet.create({
    container: {
        flex: 1
    },
    toolbar: {
        // flex: 1,
        flexDirection: "row",
        height: 84,
        backgroundColor: "#4682b4"
    },
    child: {
        backgroundColor: "#87CEEB",
        flex: 2
    },
    content: {
        padding: 20
    }
})