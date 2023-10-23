import { useState } from 'react';
import TabItem from './TabItem';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
`;

export const useTab = () => {
  const [selected, setSelected] = useState(0);

  return [selected, setSelected];
};

const Tab = ({ items = [''], selected, setSelected }) => {
  const handleTabItemClick = (index) => setSelected(index);

  console.log(selected);

  return (
    <Container>
      {items.map((item, index) => (
        <TabItem
          key={`tab-${index}`}
          index={index}
          selected={index === selected}
          handleTabItemClick={handleTabItemClick}
        >
          {item}
        </TabItem>
      ))}
    </Container>
  );
};

export default Tab;
