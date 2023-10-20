import styled from '@emotion/styled';

const Container = styled.div`
  width: 100px;
  height: 40px;

  border: 1px solid black;

  background-color: ${(props) => (props.selected ? 'yellow' : 'skyblue')};
`;

const TabItem = ({ children, index, selected, handleTabItemClick }) => {
  return (
    <Container selected={selected} onClick={() => handleTabItemClick(index)}>
      {children}
    </Container>
  );
};

export default TabItem;
