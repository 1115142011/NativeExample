import React, {useState} from 'react';
import {Text, View} from 'react-native';
import TouchButton from '@components/TouchButton';
import Tab from '@components/Tab';

const testList = [
  {tab: 'tab1', key: '1'},
  {tab: 'tab2', key: '3'},
  {tab: 'tab2', key: '4'},
];
const Login: React.FC<any> = props => {
  const [value, setValue] = useState<string>('5');
  return (
    <View style={{padding: 8}}>
      <Text>这里登录也～～～～～</Text>
      <TouchButton
        title="按钮"
        textStyle={{color: '#fff'}}
        boxStyle={{backgroundColor: 'red'}}
      />

      <Text style={{color: 'red'}}>
        <View>
          <Text>测试</Text>
        </View>
        <Text>测试3333</Text>
      </Text>
      <Tab
        tabList={testList}
        value={value}
        onChange={val => setValue(val)}
        boxStyle={{height: 80}}
      />
    </View>
  );
};

export default Login;
