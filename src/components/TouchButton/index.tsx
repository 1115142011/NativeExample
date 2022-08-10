import React from 'react';
import {
  GestureResponderEvent,
  Text,
  TextStyle,
  TouchableHighlight,
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
  borderRadius: 6,
  paddingHorizontal: 16,
  paddingVertical: 8,
  backgroundColor: '#bfbfbf',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

const TouchButton: React.FC<TouchButtonProps> = props => {
  const {boxStyle, title, textStyle, children, onPress, ...rest} = props;

  let styles: ViewStyle[] = [defaultStyle];

  if (Array.isArray(boxStyle)) {
    styles = styles.concat(boxStyle);
  } else if (boxStyle) {
    styles.push(boxStyle);
  }

  /** the TouchableHighlight dont work like except when not onPressEventHandler */
  const onPressHandle = (e: GestureResponderEvent) => {
    onPress?.(e);
  };
  return (
    <TouchableHighlight onPress={onPressHandle} style={{borderRadius: 6}}>
      <View style={styles} {...rest}>
        <Text style={textStyle}>{title || children}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default TouchButton;
