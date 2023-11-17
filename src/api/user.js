import { API_END_POINT } from './api';

const USER_API_END_POINT = API_END_POINT + '/user';

const getUsers = async () => {
  try {
    const res = await fetch(USER_API_END_POINT);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const getUserById = async ({ user_id }) => {
  try {
    const res = await fetch(USER_API_END_POINT + '/' + user_id);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

const TEMP_USER = {
  name: 'no-proxy',
  password: 'testtest',
  isMaker: true,
  channelId: 1,
};
const createUser = async (user = TEMP_USER) => {
  console.log(user);
  try {
    const res = await fetch(USER_API_END_POINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export { getUsers, getUserById, createUser };
