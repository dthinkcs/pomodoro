import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { Constants } from 'expo';

import {Countdown, TimeInput, TimerToggleButton} from './components'
import {Timer, vibrate} from './utils'

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  
  increase() {
    this.setState({count: this.state.count + 1})
  }
  
  decrease() {
    this.setState({count: this.state.count -1 })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraphInverted}>
          {this.state.count}
        </Text>
        <Text style={styles.paragraph}>
          {this.state.count}
        </Text>
        <View style={styles.playerOne}>
          <Button title='Player Two(Negative)' onPress={() => this.decrease()} />
        </View>
        <View style={styles.playerTwo}>
          <Button title='Player One(Positive)' onPress={() => this.increase()} />
        </View>
      </View>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      
        <Counter /> 
      
    );
  }
}



















const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  paragraphInverted: {
    transform: [{ rotate: '180deg'}],
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
  playerOne: {
    ...StyleSheet.absoluteFillObject,

    alignSelf: 'flex-start',
    marginTop: 0,
    position: 'absolute',

  },
  playerTwo: {
    ...StyleSheet.absoluteFillObject,
    alignSelf: 'flex-start',
    marginTop: 605,
    position: 'absolute',

  }
});