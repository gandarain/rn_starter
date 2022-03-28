import { TextStyle } from 'react-native';

export type Props = {
  title: string;
  size: number;
  color: string;
  variant: string;
};

export type Styles = {
  title: (color: string, variat: string, size: number) => TextStyle;
};
