import { FETCH_USER, FETCH_USER_SHOW } from "./constant";
export const fetchUser = () => {
  return {
    type: FETCH_USER,
  };
};

export const fetchUserShow = (data) => {
  return {
    type: FETCH_USER_SHOW,
    data,
  };
};
