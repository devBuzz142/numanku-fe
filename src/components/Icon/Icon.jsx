import ICON_HELP_CIRCLE from '../../assets/icons/help_circle.png';
import ICON_IMAGE_CIRCLE from '../../assets/icons/image_circle.svg';
import ICON_BACK_FILL from '../../assets/icons/back_fill.svg';
import ICON_UNDO from '../../assets/icons/undo.svg';
import ICON_HEART_LINE from '../../assets/icons/heart_line.svg';

const Icon = ({ name, ...props }) => {
  switch (name) {
    case 'HELP_CIRCLE':
      return <img src={ICON_HELP_CIRCLE} alt="help_circle" {...props} />;
    case 'IMAGE_CIRCLE':
      return <img src={ICON_IMAGE_CIRCLE} alt="image_circle" {...props} />;
    case 'BACK_FILL':
      return <img src={ICON_BACK_FILL} alt="back_fill" {...props} />;
    case 'UNDO':
      return <img src={ICON_UNDO} alt="undo" {...props} />;
    case 'HEART_LINE':
      return <img src={ICON_HEART_LINE} alt="heart_line" {...props} />;
    default:
      return null;
  }
};
export default Icon;
