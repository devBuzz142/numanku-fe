import styled from '@emotion/styled';

export const SpeechBubble = styled.div`
  width: 100%;
  height: 100%;

  border-radius: 50px;
  border: 5px solid #4e413b;

  ::before {
    content: '';
    position: absolute;

    top: -60px;
    right: 10%;

    border-left: 30px solid transparent; /* 왼쪽 변 */
    border-right: 30px solid transparent; /* 오른쪽 변 */
    border-bottom: 60px solid #4e413b; /* 아랫면 색상 지정 */
  }

  ::after {
    content: '';
    position: absolute;

    top: -45px;
    right: 10%;

    border-left: 30px solid transparent; /* 왼쪽 변 */
    border-right: 30px solid transparent; /* 오른쪽 변 */
    border-bottom: 60px solid #f6eddd; /* 아랫면 색상 지정 */
  }
`;
