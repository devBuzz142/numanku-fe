import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './MakeInfoPage.style';

const MakeInfoPage = () => {
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    intro: '',
    link: '',
    image: '',
  });
  const [image, setImage] = useState(null);

  const handleInfoChange = (e) => {
    let { id, value } = e.target;
    if (id === 'image') value = e.target.files[0];

    setInfo({
      ...info,
      [id]: value,
    });

    if (id === 'image') {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(value);
    }
  };

  const handleSubmitClick = () => {
    navigate('/make/design');
  };

  return (
    <S.MakeInfoPageContainer>
      <S.HeaderContainer>
        <S.HeaderWrapper>
          <h1>공연 정보를 입력해주세요</h1>
        </S.HeaderWrapper>
        <S.Guide>도움말입니다.</S.Guide>
      </S.HeaderContainer>
      <S.MainContainer>
        <form>
          <label htmlFor="image">공연 포스터 업로드</label>
          <input type="file" id="image" onChange={handleInfoChange} />
          <br />
          <label htmlFor="intro">공연소개란</label>
          <input type="text" id="intro" onChange={handleInfoChange} />
          <br />
          <label htmlFor="link">공연 관련 링크</label>
          <input type="text" id="link" onChange={handleInfoChange} />
          <br />
        </form>
        {image && <img src={image} alt="preview" />}
        <button type="button" onClick={handleSubmitClick}>
          submit
        </button>
      </S.MainContainer>
    </S.MakeInfoPageContainer>
  );
};

export default MakeInfoPage;
