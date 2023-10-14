import * as S from "./TodoItem.style";

const TodoItem = ({ children }) => {
  return <S.TodoItemContainer>{children}</S.TodoItemContainer>;
};

export default TodoItem;
