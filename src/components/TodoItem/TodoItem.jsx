import { useState } from "react";
import * as S from "./TodoItem.style";

const useInput = () => {
  const [value, setValue] = useState();
  const onChange = (event) => {
    const{
      target: {value}
    } = event;
    setValue(value);
  };
  return{ value };
};

const checkbox = {
  {
    tab: "미완료"
    content: "할 일을 아직 완료하지 못했습니다."
  },
  {
    tab: "완료"
    content: "할 일을 완료했습니다."
  }
};

const useTab = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex
  };
};

const TodoItem = () => {
  const todo = useInput();
  const tabs = useTab(0);
  return (
  <S.TodoItemContainer>
    <textarea placeholder="할 일을 입력하세요..." {...todo} />
    <div className="done">
      {checkbox.map((section) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
    </div>
    </S.TodoItemContainer>);
};

export default TodoItem;
