import { createContext, useReducer, useEffect, useContext } from 'react';
import { API } from '../api';

const ChannelContext = createContext();
export const useChannelContext = () => useContext(ChannelContext);

const initialChannelState = {
  channelId: null,
  name: '',
  info: '',
  link: '',
  password: '',
  posterImage: null,
  outterImages: [],
  innerImages: [],
};

const channelReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CHANNEL':
      return {
        ...state,
        ...action.payload,
      };
    case 'RESET_CHANNEL':
      return initialChannelState;
    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
};

const ChannelProvider = ({ children }) => {
  const [channelState, channelDispatch] = useReducer(
    channelReducer,
    initialChannelState,
  );

  // local storage
  //   useEffect(() => {
  //     const channelFromLocalStorage = localStorage.getItem('channel');
  //     if (channelFromLocalStorage) {
  //       disatch({
  //         type: 'SET_CHANNEL',
  //         payload: JSON.parse(channelFromLocalStorage),
  //       });
  //     }
  //   }, []);

  //   useEffect(() => {
  //     localStorage.setItem('channel', JSON.stringify(state));
  //   }, [state]);

  // api
  // useEffect(() => {
  //   const fetchChannel = async () => {
  //     if (channelState.channelId) {
  //       return;
  //     }

  return (
    <ChannelContext.Provider value={{ channelState, channelDispatch }}>
      {children}
    </ChannelContext.Provider>
  );
};

export default ChannelProvider;
