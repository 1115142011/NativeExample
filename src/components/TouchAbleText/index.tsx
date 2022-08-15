import React from 'react';
import {
  GestureResponderEvent,
  Text,
  TextStyle,
  TouchableOpacity,
} from 'react-native';

interface TouchAbleTextProps {
  content?: string;
  textStyle?: TextStyle;
  children?: string | React.ReactNode;
  onPress?: (e?: GestureResponderEvent) => void;
  disabled?: boolean;
}

const TouchAbleText: React.FC<TouchAbleTextProps> = props => {
  const {content, disabled, textStyle, children, onPress} = props;

  const disabledStyle: TextStyle = {color: '#d9d9d9'};

  /** the TouchableHighlight dont work like except when not onPressEventHandler */
  const onPressHandle = (e: GestureResponderEvent) => {
    if (disabled) return;
    onPress?.(e);
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPressHandle}>
      <Text style={{...textStyle, ...(disabled ? disabledStyle : {})}}>
        {content || children}
      </Text>
    </TouchableOpacity>
  );
};

export default TouchAbleText;
