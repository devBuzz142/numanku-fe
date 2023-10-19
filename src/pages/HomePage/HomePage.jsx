import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const handleViewClick = () => {
    navigate('/view/');
  };
  const handleMakeClick = () => {
    navigate('/make/');
  };

  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={handleViewClick}>view</button>
      <br />
      <button onClick={handleMakeClick}>make</button>
    </div>
  );
};

export default HomePage;
