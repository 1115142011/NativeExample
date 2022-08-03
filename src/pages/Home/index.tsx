import React from 'react';
import {Text, View} from 'react-native';

const Home: React.FC<any> = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>这里首页</Text>
    </View>
  );
};

export default Home;