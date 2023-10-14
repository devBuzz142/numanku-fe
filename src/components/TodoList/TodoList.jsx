import * as S from "./TodoList.style";

const TodoList = ({ children }) => {
  return (
    <S.TodoListContainer>
      <h2>TodoList</h2>
      {children}
    </S.TodoListContainer>
  );
};

export default TodoList;
