import { useReducer, useContext, createContext } from 'react';

const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

const initialAuthState = {
  userId: '',
  name: '',
  password: '',
  isMaker: null,
  channelId: '',
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, ...action.payload };
    case 'RESET_USER':
      return initialAuthState;
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, initialAuthState);

  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
