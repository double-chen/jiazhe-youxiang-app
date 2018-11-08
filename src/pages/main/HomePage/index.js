import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  Picker,
} from 'react-native';
import styles from './styles';

export default class HomePage extends Component {
  static navigationOptions = {
    tabBarLabel: '首页',
    tabBarIcon: ({ focused }) => focused
      ? <Image style={styles.tabBarIcon} source={require('../../../assets/images/home_sel.png')} />
      : <Image style={styles.tabBarIcon} source={require('../../../assets/images/home_nor.png')} />
  };

  constructor(props) {
    super(props);
    this.state = {
      selectCity: '',
    };
  }

  render() {
    const { selectCity } = this.state;
    return (
      <View style={styles.container}>
        <View>
          <Picker
            selectedValue={selectCity}
            style={{ height: 50, width: 100 }}
            onValueChange={(itemValue, itemIndex) => this.setState({ selectCity: itemValue })}>
            <Picker.Item label="北京" value="beijing" />
            <Picker.Item label="上海" value="shanghai" />
          </Picker>
        </View>
        <View>
          {/* 轮播广告 */}
        </View>
        <View>
          {/* 菜单 */}
        </View>
        <View>
          {/* 图片 */}
        </View>
        <View>
          {/* 保洁card */}
        </View>
        <View>
          {/* 电子卡card */}
        </View>
      </View>
    );
  }
}