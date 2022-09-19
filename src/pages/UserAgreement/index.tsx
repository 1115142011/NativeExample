import React from 'react';
import {Text, View} from 'react-native';

const UserAgreement: React.FC<any> = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: '#1677ff'}}>这里是用户协议～～</Text>
    </View>
  );
};

export default UserAgreement;
