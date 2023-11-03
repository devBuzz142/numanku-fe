import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './MakeInfoPage.style';
import Header from '../../components/Header/Header';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

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

  return (
    <S.MakeInfoPageContainer image={image}>
      <S.HeaderContainer>
        <S.HeaderWrapper>
          <Header width={382}>공연 정보를 입력해주세요</Header>
        </S.HeaderWrapper>
        <S.Guide>도움말입니다.</S.Guide>
        <div>? icon</div>
      </S.HeaderContainer>
      <S.MainContainer>
        <S.Form>
          <Input
            width={420}
            label="공연포스터 업로드"
            type="file"
            id="image"
            onChange={handleInfoChange}
          />
          <Input
            width={550}
            label="공연소개란"
            type="text"
            id="intro"
            onChange={handleInfoChange}
          />
          <Input
            width={550}
            label="공연 관련 링크"
            type="text"
            id="link"
            onChange={handleInfoChange}
          />
        </S.Form>
        <S.ButtonWrapper>
          <Button type="button" onClick={() => navigate('/make/design')}>
            쿠키 꾸미기
          </Button>
        </S.ButtonWrapper>
      </S.MainContainer>
    </S.MakeInfoPageContainer>
  );
};

export default MakeInfoPage;
