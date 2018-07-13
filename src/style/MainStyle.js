import React from 'react'
import {StyleSheet} from 'react-native'

export default class MainStyle{
    static getTabBarStyle (titlesLength){
        const length = `${100 / titlesLength}%`
        return StyleSheet.create({
            titleView: {
                width: length,
                paddingTop: 30,
                paddingBottom: 20,
                paddingLeft: 10,
                paddingRight: 10
            },
        })
    }
}