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

  //     try {
  //       const res = await API.channel.getChannels();
  //       const channel = res[0];

  //       channelDispatch({
  //         type: 'SET_CHANNEL',
  //         payload: {
  //           ...channel,
  //           channelId: channel.id,
  //           outterImages: [
  //             channel.outterImage0,
  //             channel.outterImage1,
  //             channel.outterImage2,
  //           ],
  //           innerImages: [
  //             channel.innerImage0,
  //             channel.innerImage1,
  //             channel.innerImage2,
  //           ],
  //         },
  //       });
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchChannel();
  // }, []);

  return (
    <ChannelContext.Provider value={{ channelState, channelDispatch }}>
      {children}
    </ChannelContext.Provider>
  );
};

export default ChannelProvider;
