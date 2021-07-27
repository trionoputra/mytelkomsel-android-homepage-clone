import {  Text, View } from 'react-native';
import React from 'react';
import styles  from '../styles/Style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements';
const ItemViewRecentTransaction = ({ item }) => {
    return (
        <View style={styles.shadowWrapper}>
            <View style={[styles.listRecentItem,styles.flexRow]}>
                <Ionicons name="phone-portrait" size={40} style={styles.iconRecent} />
                <View style={{flex:1}}>
                    <Text  style={[styles.labelBoldLarge]}> {item.title} </Text>
                    <Text  style={styles.labelNormal}> {item.date} </Text>
                </View>
                <Button type="outline" containerStyle={{flex:1,marginRight:8,alignItems:'flex-end'}} titleStyle={[styles.labelBoldLarge,{color :"black"}]} buttonStyle={[styles.btnHome,styles.btnWhite,{width:90}]} title="Buy" />
            </View>
        </View>
      );
}

export default ItemViewRecentTransaction;

 