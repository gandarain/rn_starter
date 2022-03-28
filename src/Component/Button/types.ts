import type { VoidFunction } from '../../Type';

export type Props = {
  onPress: VoidFunction;
  height: number;
  width: string;
  color: string;
  children: JSX.Element | JSX.Element[] | string | null;
};
