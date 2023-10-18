import React, { createContext, useReducer } from 'react';

const TodoContext = createContext();

const initialState = {
  todos: [],
};

//reducer는 현재 state와 동적 객체를 인수로 받아와서 새로운 state를 반환 하는 거라는데... 여기서 필요한지 잘 모르겠어요
//할일을 추가하고 삭제하는 여러 상태를 관리하기 위해서 필요한 건가요??

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return {
        todos: [...state.todos, action.payload],
      };
    //다른 액션도 여기에 추가
    default:
      return state;
  }
};

function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };