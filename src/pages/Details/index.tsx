import React from 'react';
import {Text, View} from 'react-native';

const Details: React.FC<any> = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>这里是详情页</Text>
    </View>
  );
};

export default Details;