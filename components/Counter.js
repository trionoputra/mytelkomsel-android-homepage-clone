import { Button, Text, View } from 'react-native';
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <View>
            <Text>You clicked {count} times</Text>
            <Button  onPress={() => setCount(count + 1)} title="Click me"/>
        </View>
      );
}

export default Counter;

 