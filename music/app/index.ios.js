/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react'
import {AppRegistry, StyleSheet, Text, View} from 'react-native'
import C from './demo/NavigationExperimentalExample'

export default class app extends Component {
  render() {
    return (
      <C />
    )
  }
}

AppRegistry.registerComponent('app', () => app)
