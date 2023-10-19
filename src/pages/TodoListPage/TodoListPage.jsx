import * as S from "./TodoListPage.style";

import TodoList from "../../components/TodoList/TodoList";
import TodoItem from "../../components/TodoItem/TodoItem";

import { useContext, useEffect } from "react";
import { TodoContext } from "../../components/TodoItem/TodoContext";

const TodoListPage = () => {
  const { state, dispatch } = useContext(TodoContext);
  console.log(state);

  useEffect(() => {
    const getDummy = async () => {
      const res = await fetch("/dummy.json");
      const data = await res.json();
      console.log(data);
    };

    getDummy();
  }, []);

  return (
    <S.TodoListPageContainer>
      <TodoList>
        <TodoItem>1</TodoItem>
        <TodoItem>2</TodoItem>
        <TodoItem>3</TodoItem>
      </TodoList>
    </S.TodoListPageContainer>
  );
};

export default TodoListPage;
