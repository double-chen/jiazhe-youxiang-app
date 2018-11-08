import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import styles from './styles';

export default class HomePage extends Component {
  static navigationOptions = {
    tabBarLabel: '我的',
    tabBarIcon: ({ focused }) => focused
      ? <Image style={styles.tabBarIcon} source={require('../../../assets/images/home_sel.png')} />
      : <Image style={styles.tabBarIcon} source={require('../../../assets/images/home_nor.png')} />
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>我的</Text>
      </View>
    );
  }
}