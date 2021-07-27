
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './BottomTabNavigator';
import { StatusBar } from 'react-native';

export default AppNavigator = () => {
    return (
        
    <NavigationContainer>
        <StatusBar barStyle='default' />
        <BottomTabNavigator/>
    </NavigationContainer>
    );
}


