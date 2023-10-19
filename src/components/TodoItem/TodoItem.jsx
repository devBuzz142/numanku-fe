import React, { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";
import * as S from "./TodoItem.style";

const useInputs = () => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setValue(value);
  };

  return { value };
};

const checkbox = [
  {
    tab: "미완료",
    content: "할 일을 아직 완료하지 못했습니다.",
  },
  {
    tab: "완료",
    content: "할 일을 완료했습니다.",
  },
];

const useTab = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};

const TodoItem = () => {
  const { state, dispatch } = useContext(TodoContext);

  const handleAddTodo = () => {
    dispatch({
      type: "ADD",
      text: todo.value,
      status: currentItem.tab,
    });

    async function postTodo(data) {
      const response = await fetch({
        method: "POST",
        headers: {
          "Content-Type": "assets/json",
        },
        body: JSON.stringify(data),
      });

      return response.json();
    }
  };

  const todo = useInputs();

  const { currentItem, changeItem } = useTab(0, checkbox);

  console.log(currentItem);

  return (
    <S.TodoItemContainer>
      <textarea placeholder="할 일을 입력하세요..." {...todo} />
      <div className="done">
        {checkbox.map((section, index) => (
          <button onClick={() => changeItem(index)}>{section.tab}</button>
        ))}
      </div>
    </S.TodoItemContainer>
  );
};

export default TodoItem;
