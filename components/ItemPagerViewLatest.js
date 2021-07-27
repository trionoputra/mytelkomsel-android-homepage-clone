import {  Text, View } from 'react-native';
import React from 'react';
import styles  from '../styles/Style';

const ItemPagerViewLatest = ({ item }) => {
    return (
        <View style={[styles.shadowWrapper]}>
            <View style={styles.pagerLatestItem}>
                <Text style={styles.labelNormal}> test </Text>
            </View>
        </View>
      );
}

export default ItemPagerViewLatest;

 