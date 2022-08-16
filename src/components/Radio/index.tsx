import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

type RadioProps = {
  value?: string;
  checked?: boolean;
  onChange?: (value?: string) => void;
};

const Radio: React.FC<RadioProps> = props => {
  const {checked, value, onChange} = props;
  const pressHandler = () => {
    onChange?.(value);
  };
  return (
    <TouchableOpacity onPress={pressHandler}>
      <Image
        style={{width: 16, height: 16}}
        source={
          checked
            ? require('@assets/radio/selected.png')
            : require('@assets/radio/no_selected.png')
        }
      />
    </TouchableOpacity>
  );
};

export default Radio;
