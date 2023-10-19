import * as S from "./TodoListPage.style";

import TodoList from "../../components/TodoList/TodoList";
import TodoItem from "../../components/TodoItem/TodoItem";

import { useContext, useEffect } from "react";
import { TodoContext } from "../../components/TodoItem/TodoContext";

const TodoListPage = () => {
  const { state, dispatch } = useContext(TodoContext);
  console.log(state);

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
