import React from 'react';
import { View, Text } from 'react-native';
import styles  from '../styles/Style'

export default class Point extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>Point</Text>
      </View>
    );
  }
}
