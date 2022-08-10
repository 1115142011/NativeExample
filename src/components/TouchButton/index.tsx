import commonStyle from '@commonStyle/index';
import React from 'react';
import {
  GestureResponderEvent,
  Text,
  TextStyle,
  TouchableHighlight,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

interface TouchButtonProps {
  boxStyle?: ViewStyle | ViewStyle[];
  title?: string;
  textStyle?: TextStyle;
  children?: string | React.ReactNode;
  onPress?: (e?: GestureResponderEvent) => void;
}

const defaultStyle: ViewStyle = {
  width: '100%',
  borderRadius: 6,
  paddingHorizontal: 16,
  paddingVertical: 8,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

const TouchButton: React.FC<TouchButtonProps> = props => {
  const {boxStyle, title, textStyle, children, onPress, ...rest} = props;

  let styles: ViewStyle = {...defaultStyle};

  if (Array.isArray(boxStyle)) {
    styles = boxStyle.reduce((prev, current) => {
      return Object.assign(prev, current);
    }, styles);
  } else if (boxStyle) {
    styles = Object.assign(styles, boxStyle);
  }

  /** the TouchableHighlight dont work like except when not onPressEventHandler */
  const onPressHandle = (e: GestureResponderEvent) => {
    onPress?.(e);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPressHandle}
      style={[
        commonStyle.cntentCenter,
        {
          borderRadius: styles.borderRadius,
        },
      ]}>
      <View style={styles} {...rest}>
        <Text style={textStyle}>{title || children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TouchButton;
