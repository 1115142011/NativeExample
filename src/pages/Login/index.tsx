import React from 'react';
import {Text, View} from 'react-native';
import TouchButton from '@components/TouchButton';

const Login: React.FC<any> = props => {
  return (
    <View style={{padding:8}}>
      <Text>这里登录也～～～～～</Text>
      <TouchButton  title="按钮" textStyle={{color:'#fff'}} boxStyle={{backgroundColor:'#eb2f96'}} />

      <Text style={{color: 'red'}}>
        <View>
          <Text>测试</Text>
        </View>
        <Text>测试3333</Text>
      </Text>
    </View>
  );
};

export default Login;
