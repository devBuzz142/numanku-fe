import * as S from "./TodoListPage.style";

import TodoList from "../../../components/TodoList/TodoList";
import TodoItem from "../../../components/TodoItem/TodoItem";

const TodoListPage = () => {
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
