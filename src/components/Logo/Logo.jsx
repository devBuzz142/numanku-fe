import logo from '../../assets/images/logo.svg';
import { useNavigate } from 'react-router-dom';

const Logo = ({ width, height, link }) => {
  const navigate = useNavigate();

  return (
    <div className="logo">
      <img
        src={logo}
        alt="logo"
        width={width}
        height={height}
        onClick={(e) => navigate(link)}
      />
    </div>
  );
};
export default Logo;
