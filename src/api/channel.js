import { API_END_POINT } from './api';

const CHANNEL_API_END_POINT = API_END_POINT + '/channel';

const getChannels = async () => {
  try {
    const res = await fetch(CHANNEL_API_END_POINT);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getChannelById = async (channelId) => {
  try {
    const res = await fetch(CHANNEL_API_END_POINT + '/' + channelId);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { getChannels, getChannelById };
