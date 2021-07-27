import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TouchableNativeFeedback,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home';
import Point from '../screens/Point';
import Shop from '../screens/Shop';
import Explore from '../screens/Explore';
import Menu from '../screens/Menu';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TouchableRipple  } from 'react-native-paper';

const Tab = createBottomTabNavigator();

const buttonNativeFeedback = ({ children, style, ...props }) => (
  <TouchableNativeFeedback
    {...props}
    useForeground={false}
    background={TouchableNativeFeedback.Ripple('grey', true)}>
    <View style={style}>{children}</View>
  </TouchableNativeFeedback>
);

export default function BottomTabNavigator() {
    return (
         
        <Tab.Navigator 
            tabBarOptions={{ 
              pressColor : '#000000',
              activeTintColor: '#gray',
              inactiveTintColor: 'gray',
              activeTintColor: '#E5131E',
              inactiveTintColor: 'gray',
              labelStyle: {
                  marginBottom: 4,
                  fontWeight:'bold',
                },
              style: {
                  height: 55,
                  padding: 5,
              }
            }}
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
                if (route.name === 'Home') 
                    iconName = 'home-outline';
                else if (route.name === 'Point') 
                    iconName = 'trophy-outline';
                else if (route.name === 'Shop') 
                    iconName = 'cart-outline';
                else if (route.name === 'Menu') 
                    iconName = 'menu-outline';
                else if (route.name === 'Explore') 
                    iconName = 'rocket-outline';
  
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })} >

          <Tab.Screen name="Home" component={Home}  options={{
            tabBarButton: buttonNativeFeedback,
          }}  />
          <Tab.Screen name="Point" component={Point} options={{
            tabBarButton: buttonNativeFeedback,
          }}  />
          <Tab.Screen name="Shop" component={Shop} options={{
            tabBarButton: buttonNativeFeedback,
          }} />
          <Tab.Screen name="Explore" component={Explore}  options={{
            tabBarButton: buttonNativeFeedback,
          }}/>
          <Tab.Screen name="Menu" component={Menu}  options={{
            tabBarButton: buttonNativeFeedback,
          }}/>
        </Tab.Navigator>
    );
  }