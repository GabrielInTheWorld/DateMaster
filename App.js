import React from 'react';
import { Alert, Button, StyleSheet, Text, View, TextInput } from 'react-native';

import CustomButton from './src/components/CustomButton.js'
import TabBar from "./src/components/layout/TabBar";
import ChatView from "./src/components/routes/ChatView";
import DateView from "./src/components/routes/DateView";
import StoryView from "./src/components/routes/StoryView";

export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            text: ""
        }
    }

    onChangeText = (text) => {
        this.setState({text})
    }

    render() {
        const {text} = this.state
        // const view = (
        //     <View style={styles.container}>
        //         <View style={style.titlebar}>
        //             <View style={{padding: 20}}>
        //                 <TextInput
        //                     style={{height: 40}}
        //                     placeholder={"Type here"}
        //                     onChangeText={this.onChangeText} />
        //             </View>
        //         </View>
        //         <View style={style.content}>
        //             <View style={{padding: 20}}>
        //                 <Button
        //                     onPress={() => Alert.alert("A new alert", "Here is a message")}
        //                     title={"Press to alert"} />
        //                 <CustomButton style={"danger"} title={"A custom button"} onPress={() => Alert.alert('a custom button alerted', "here it comes")}/>
        //                 <Text>Open up App.js to start working on your app!</Text>
        //                 <Text>Changes you make will automatically reload.</Text>
        //                 <Text>Shake your phone to open the developer menu.</Text>
        //                 <Text style={style.textStyle}>{text}</Text>
        //             </View>
        //         </View>
        //     </View>
        // )
        const titles = [
            "Chats",
            "Story",
            "Dates",
            "Sonstiges"
        ]
        const containers = [
            <ChatView/>,
            <DateView/>,
            <StoryView/>
        ]

        const tabBar = (
            <TabBar titles={titles} containers={containers}/>
        )
        // const example = (
        //     <View style={{flex: 1}}>
        //         <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        //         <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        //         <View style={{flex: 3, backgroundColor: 'steelblue'}} />
        //     </View>
        // )
        return (
            tabBar
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // position: "absolute",
        flex: 1,
        // padding: 20,
        // margin: 20
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});

const style = StyleSheet.create({
    titlebar: {
        backgroundColor: "#4682b4",
        // position: "relative",
        top: 24,
        // left: 0,
        // flex: 1,
        height: 84,
    },
    content: {
        backgroundColor: "#87CEEB",
        // position: "relative",
        // top: 0,
        // left: 0,
        flex: 2
        // height: 60
    },
    textStyle: {
        fontSize: 24,
        // padding: 10
    }
})