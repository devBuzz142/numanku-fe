import { API_END_POINT } from './api';

const KUKI_API_END_POINT = API_END_POINT + '/kuki';

const getKuies = async () => {
  try {
    const res = await fetch(KUKI_API_END_POINT);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getKukiById = async ({ kukiId }) => {
  try {
    const res = await fetch(KUKI_API_END_POINT + '/' + kukiId);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getKukiesByChannelId = async ({ channel_id }) => {
  try {
    const res = await fetch(KUKI_API_END_POINT + `/${channel_id}/kukies`);
    const data = await res.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};

const createKuki = async (kuki) => {
  try {
    const res = await fetch(KUKI_API_END_POINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(kuki),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { getKuies, getKukiById, createKuki, getKukiesByChannelId };
