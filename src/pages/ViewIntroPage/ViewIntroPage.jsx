import { useNavigate } from 'react-router-dom';
import * as S from './ViewIntroPage.style';
import { useEffect } from 'react';

const ViewIntroPage = () => {
  const navigtae = useNavigate();

  const handleStart = () => {
    navigtae('/view');
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      navigtae('/view');
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return <S.ViewIntroPage onClick={handleStart}></S.ViewIntroPage>;
};

export default ViewIntroPage;
