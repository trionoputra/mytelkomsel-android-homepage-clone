import {  Text, View,TouchableNativeFeedback } from 'react-native';
import React from 'react';
import styles  from '../styles/Style';

const ItemViewPackage = ({ item }) => {
    return (
        <TouchableNativeFeedback style={styles.shadowWrapper}>
            <View style={styles.listCurrentPackageItem}>
                <Text style={styles.labelNormal}> {item.title} </Text>
                <Text  style={[styles.labelBoldLarge,styles.smallTopMargin]}> {item.amount} </Text>
                <Text  style={styles.labelthin}> {item.title != 'Monetery'  ? "Until " + item.date : ""} </Text>
            </View>
        </TouchableNativeFeedback>
      );
}

export default ItemViewPackage;

 