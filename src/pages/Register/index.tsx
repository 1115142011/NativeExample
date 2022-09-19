import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  NativeSyntheticEvent,
  Platform,
  Text,
  TextInput,
  TextInputChangeEventData,
  View,
} from 'react-native';
import TouchAbleText from '@components/TouchAbleText';
import Input from '@components/Input';
import TouchButton from '@components/TouchButton';
import commonStyle from '@commonStyle/index';
import Radio from '@components/Radio';

type InputValType = {
  account?: string;
  securityCode?: string;
  mobile?: string;
  password?: string;
  isAgree?: boolean;
  aginPassword?: string;
};
const RegisterComponent: React.FC<any> = props => {
  const codeInputRef = useRef<TextInput>();
  const TimerRef = useRef<any>();
  const [inputVal, setInputVal] = useState<InputValType>({
    account: undefined,
    securityCode: undefined,
    mobile: undefined,
    password: undefined,
    aginPassword: undefined,
    isAgree: true,
  });
  const [passwordHide, setPasswordHide] = useState<{
    first: boolean;
    agin: boolean;
  }>({first: true, agin: true});

  const [restTime, setRestTime] = useState<number>(60);

  /**  input change  */
  const onAccountChange = (
    key: keyof InputValType,
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    const val = e.nativeEvent.text;
    setInputVal(prev => {
      return {
        ...prev,
        [key]: val,
      };
    });
  };

  /** 计算验证码间隔时间 */
  const calculateTimeInterval = () => {
    TimerRef.current = setTimeout(() => {
      setRestTime(prev => {
        if (prev <= 0) {
          return 60;
        } else {
          calculateTimeInterval();
          return prev - 1;
        }
      });
    }, 1000);
  };

  /** 获取验证码 */
  const getSecurityCode = () => {
    setRestTime(prev => prev - 1);
    codeInputRef.current?.focus();
    /** @todo service api */
    calculateTimeInterval();
  };

  /**密码 可见性切换 */
  const triggerPasswordVisible = (key: 'first' | 'agin') => {
    setPasswordHide(prev => {
      return {
        ...prev,
        [key]: !prev[key],
      };
    });
  };

  /** 是否同意协议变更 */
  const agreementStatusChange = () => {
    setInputVal(prev => {
      return {
        ...prev,
        isAgree: !prev.isAgree,
      };
    });
  };
    /** 页面切换 */
    const changeRoute = (path: string) => {
      const {navigation} = props;
      navigation.navigate(path);
    };

  /** 注册 */
  const loginIn = () => {
    const {isAgree, account, password, securityCode} = inputVal;
    if (!isAgree) {
      Alert.alert('提示', '请阅读并同意用户协议和隐私政策', [{text: '确定'}]);
      return;
    }
  };

  useEffect(() => {
    return () => {
      TimerRef.current && clearTimeout(TimerRef.current);
    };
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={{
        padding: 8,
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
      }}>
      <View style={{paddingTop: 48, paddingHorizontal: 24}}>
        <View style={{paddingHorizontal: 8, paddingTop: 32}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{color: '#E77075', fontSize: 22}}>一键</Text>
            <Text style={{fontSize: 22}}>快速注册</Text>
          </View>
          <View style={{marginTop: 16}}>
            <Input
              onChange={(e: any) => onAccountChange('account', e)}
              value={inputVal.account}
              autoFocus
              style={{height: 55}}
              textStyle={{fontSize: 18}}
              placeholder="请输入账户名"
            />
          </View>
          <View style={{marginTop: 16}}>
            <Input
              onChange={(e: any) => onAccountChange('mobile', e)}
              value={inputVal.account}
              autoFocus
              style={{height: 55}}
              textStyle={{fontSize: 18}}
              placeholder="请输入手机号"
            />
          </View>

          <View style={{marginTop: 16}}>
            <Input
              ref={codeInputRef}
              value={inputVal.securityCode}
              onChange={(e: any) => onAccountChange('securityCode', e)}
              maxLength={6}
              style={{height: 55}}
              textStyle={{fontSize: 18}}
              placeholder="请输入验证码"
              extra={
                <View style={[commonStyle.flexRowCenter]}>
                  <View
                    style={{
                      borderWidth: 1,
                      height: 18,
                      marginRight: 8,
                      borderColor: '#d9d9d9',
                    }}
                  />
                  <TouchAbleText
                    onPress={getSecurityCode}
                    disabled={restTime < 60 || inputVal.account?.length !== 11}
                    textStyle={{
                      width: 80,
                      color:
                        inputVal.account?.length === 11 ? '#e77075' : '#d9d9d9',
                    }}>
                    {restTime < 60 ? '重新获取' + restTime : '发送验证码'}
                  </TouchAbleText>
                </View>
              }
            />
          </View>

          <View style={{marginTop: 16}}>
            <Input
              secureTextEntry={passwordHide.first}
              textContentType="password"
              value={inputVal.password}
              onChange={(e: any) => onAccountChange('password', e)}
              style={{height: 55}}
              textStyle={{fontSize: 18}}
              placeholder="请输入密码"
              extra={
                <TouchAbleText
                  onPress={() => triggerPasswordVisible('first')}
                  textStyle={{
                    ...commonStyle.cntentCenter,
                    paddingHorizontal: 8,
                  }}>
                  <Image
                    source={
                      passwordHide.first
                        ? require('@assets/eyes/eye_open.png')
                        : require('@assets/eyes/eye_close.png')
                    }
                  />
                </TouchAbleText>
              }
            />
          </View>
          <View style={{marginTop: 16}}>
            <Input
              secureTextEntry={passwordHide.agin}
              textContentType="password"
              value={inputVal.aginPassword}
              onChange={(e: any) => onAccountChange('aginPassword', e)}
              style={{height: 55}}
              textStyle={{fontSize: 18}}
              placeholder="请再次输入密码"
              extra={
                <TouchAbleText
                  onPress={() => triggerPasswordVisible('agin')}
                  textStyle={{
                    ...commonStyle.cntentCenter,
                    paddingHorizontal: 8,
                  }}>
                  <Image
                    source={
                      passwordHide.agin
                        ? require('@assets/eyes/eye_open.png')
                        : require('@assets/eyes/eye_close.png')
                    }
                  />
                </TouchAbleText>
              }
            />
          </View>
        </View>
        <View style={{paddingTop: 48}}>
          <TouchButton
            onPress={loginIn}
            boxStyle={{
              height: 49,
              backgroundColor: '#E77075',
              borderRadius: 25,
            }}
            textStyle={{color: '#FFF', fontSize: 20}}>
            立即注册
          </TouchButton>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 16,
        }}>
        <Radio checked={inputVal.isAgree} onChange={agreementStatusChange} />
        <Text style={{color: '#999', marginLeft: 8}}>我已阅读并同意</Text>
        <TouchAbleText onPress={() => changeRoute('/user-agreement')}>
          <Text style={{color: '#333'}}>《用户协议》</Text>
        </TouchAbleText>
        <Text style={{color: '#333'}}>和</Text>
        <TouchAbleText onPress={() => changeRoute('/privacy-policy')}>
          <Text style={{color: '#333'}}>《隐私政策》</Text>
        </TouchAbleText>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterComponent;
