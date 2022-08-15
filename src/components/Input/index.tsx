import React, {
  forwardRef,
  RefAttributes,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  NativeSyntheticEvent,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

interface InputProps extends TextInputProps {
  style?: ViewStyle;
  textStyle?: TextStyle;
  extra?: React.ReactNode;
}

const Input = forwardRef((props: InputProps, ref) => {
  const {style, textStyle, extra, onFocus, onBlur, ...rest} = props;
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<TextInput>();
  const defaultStyle: ViewStyle = {
    borderRadius: 6,
    height: 40,
    borderColor: isFocused ? '#E77075' : '#d9d9d9',
    borderWidth: 2,
    paddingHorizontal: 8,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 0,
  };
  let styles: ViewStyle = {...defaultStyle};
  if (Array.isArray(style)) {
    styles = style.reduce((prev, current) => {
      return Object.assign(prev, current);
    }, styles);
  } else if (style) {
    styles = Object.assign(styles, style);
  }

  const onFocusHandle = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const onBlurHandle = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  useImperativeHandle(ref, () => inputRef.current);

  return (
    <View style={styles}>
      <TextInput
        ref={(node: any) => (inputRef.current = node)}
        style={{flex: 1, height: '100%', overflow: 'hidden', ...textStyle}}
        selectionColor="#E77075"
        placeholder="请输入"
        {...rest}
        onFocus={onFocusHandle}
        onBlur={onBlurHandle}
      />
      {extra && <View style={{paddingLeft: 4}}>{extra}</View>}
    </View>
  );
});

export default Input;
