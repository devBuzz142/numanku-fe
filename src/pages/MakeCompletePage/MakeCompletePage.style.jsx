import styled from '@emotion/styled';
import BaseButton from '../../components/Button/Button';

export const MakeCompletePage = styled.div`
  padding-left: 50px;
  padding-right: 50px;

  display: flex;
  flex-direction: column;
`;

export const BackIconWrapper = styled.div`
  margin-top: 100px;
`;

export const CompleteUIContainer = styled.div`
  width: 650px;
  height: 730px;

  margin-top: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-image: ${(props) => `url(${props.poster})`};
  background-size: cover;
  isolation: isolate;

  ::after {
    content: '';
    position: absolute;
    background: white;
    z-index: -1;
    inset: 0;
    opacity: 0.4;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 80px;

  height: 500px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Button = ({ children, ...props }) => {
  return (
    <BaseButton backgroundColor="#857671" color="#FFFFFF" {...props}>
      {children}
    </BaseButton>
  );
};
