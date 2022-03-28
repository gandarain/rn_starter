import type { ViewStyle } from 'react-native';

const styles = {
  button: (height: number, width: string, color: string): ViewStyle => ({
    height: height,
    width: width,
    backgroundColor: color,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  }),
};

export default styles;
