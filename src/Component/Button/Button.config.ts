import Utils from '../../Utils';

const {
  DefaultData: { emptyString, noop },
} = Utils;

const displayName = 'GeneralText';
const defaultProps = {
  onPress: noop,
  height: 0,
  width: emptyString,
  color: emptyString,
  children: emptyString,
};

export default { displayName, defaultProps };
