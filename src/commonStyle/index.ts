import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  /** vertical horizontal center */
  cntentCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  /** horizontal center */
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
