import ICON_HELP_CIRCLE from '../../assets/icons/help_circle.png';

const Icon = ({ name, ...props }) => {
  switch (name) {
    case 'HELP_CIRCLE':
      return <img src={ICON_HELP_CIRCLE} alt="help_circle" {...props} />;
    default:
      return null;
  }
};
export default Icon;
