import * as S from './ViewDesignPage.style';
import Header from '../../components/Header/Header';
import Icon from '../../components/Icon/Icon';
import Button from '../../components/Button/Button';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { KUKI_IMAGES } from '../../commons/dummy';

const ViewDesignPage = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState({
    menu: 'outter', // 'outter' | 'inner'
    outter: Math.floor(Math.random() * 3), // 0 ~ 2
    inner: Math.floor(Math.random() * 3), // 0 ~ 2
  });

  const handleTabChange = (name, value) => {
    setActiveTab({ ...activeTab, [name]: value });
  };

  const handleSubmitClick = () => {
    navigate('/view/write', {
      state: {
        outter: activeTab.outter,
        inner: activeTab.inner,
      },
    });
  };

  return (
    <S.ViewDesignPage>
      <S.HeaderContainer>
        <S.IconWrapper onClick={() => navigate('/view')}>
          <Icon name="BACK_FILL" width={46} />
        </S.IconWrapper>
        <Header width={346}>{'예쁘게\n꾸며주세요!'}</Header>
      </S.HeaderContainer>
      <S.KukiContainer>
        <S.KukiWrapper>
          <S.Kuki
            outter={KUKI_IMAGES.outter[activeTab.outter]}
            inner={KUKI_IMAGES.inner[activeTab.inner]}
            menu={activeTab.menu}
          />
        </S.KukiWrapper>
      </S.KukiContainer>
      <S.ControllerContainer>
        <S.MenuWrapper>
          <S.MenuTab
            selected={activeTab.menu === 'outter'}
            onClick={() => handleTabChange('menu', 'outter')}
          >
            쿠키 모양
          </S.MenuTab>
          <S.MenuTab
            selected={activeTab.menu === 'inner'}
            onClick={() => handleTabChange('menu', 'inner')}
          >
            쿠키 그림
          </S.MenuTab>
        </S.MenuWrapper>
        <S.Controller>
          <S.DrawingContainer selected={activeTab.menu === 'outter'}>
            <S.DrawingWrapper
              selected={activeTab.outter === 0}
              onClick={() => handleTabChange('outter', 0)}
            >
              쿠키 모양1
            </S.DrawingWrapper>
            <S.DrawingWrapper
              selected={activeTab.outter === 1}
              onClick={() => handleTabChange('outter', 1)}
            >
              쿠키 모양2
            </S.DrawingWrapper>
            <S.DrawingWrapper
              selected={activeTab.outter === 2}
              onClick={() => handleTabChange('outter', 2)}
            >
              쿠키 모양3
            </S.DrawingWrapper>
          </S.DrawingContainer>
          <S.DrawingContainer selected={activeTab.menu === 'inner'}>
            <S.DrawingWrapper
              selected={activeTab.inner === 0}
              onClick={() => handleTabChange('inner', 0)}
            >
              쿠키 그림1
            </S.DrawingWrapper>
            <S.DrawingWrapper
              selected={activeTab.inner === 1}
              onClick={() => handleTabChange('inner', 1)}
            >
              쿠키 그림2
            </S.DrawingWrapper>
            <S.DrawingWrapper
              selected={activeTab.inner === 2}
              onClick={() => handleTabChange('inner', 2)}
            >
              쿠키 그림3
            </S.DrawingWrapper>
          </S.DrawingContainer>
          <S.ButtonWrapper>
            <Button width={626} onClick={handleSubmitClick}>
              오븐에 넣기
            </Button>
          </S.ButtonWrapper>
        </S.Controller>
      </S.ControllerContainer>
    </S.ViewDesignPage>
  );
};

export default ViewDesignPage;
