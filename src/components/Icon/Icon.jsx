import ICON_HELP_CIRCLE from '../../assets/icons/help_circle.png';
import ICON_IMAGE_CIRCLE from '../../assets/icons/image_circle.svg';
import ICON_BACK_FILL from '../../assets/icons/back_fill.svg';
import ICON_CHECKBOX from "../../assets/icons/check_box.svg";
import ICON_DIVIDE_LINE from "../../assets/icons/divide_line.svg";
import ICON_HEART_LINE from '../../assets/icons/heart_line.svg';

const Icon = ({ name, ...props }) => {
  switch (name) {
    case 'HELP_CIRCLE':
      return <img src={ICON_HELP_CIRCLE} alt="help_circle" {...props} />;
    case 'IMAGE_CIRCLE':
      return <img src={ICON_IMAGE_CIRCLE} alt="image_circle" {...props} />;
    case 'BACK_FILL':
      return <img src={ICON_BACK_FILL} alt="back_fill" {...props} />;
    case 'CHECKBOX':
      return <img src={ICON_CHECKBOX} alt="checkbox" {...props} />;
    case 'DIVIDE_LINE':
      return <img src={ICON_DIVIDE_LINE} alt="divide_line" {...props} />;
    case 'HEART_LINE':
      return <img src={ICON_HEART_LINE} alt="heart_line" {...props} />;
    default:
      return null;
  }
};
export default Icon;
