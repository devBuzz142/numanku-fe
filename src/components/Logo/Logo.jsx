import logo from '../../assets/images/logo.svg';

const Logo = ({ width, height }) => {
  return (
    <div className="logo">
      <img src={logo} alt="logo" width={width} height={height} />
    </div>
  );
};
export default Logo;
