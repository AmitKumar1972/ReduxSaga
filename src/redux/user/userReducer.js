import { FETCH_USER, FETCH_USER_SHOW } from "./constant";

const initialState = {
  users: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
      };
    case FETCH_USER_SHOW:
      return {
        ...state,
        users: action.data,
      };

    default:
      return state;
  }
};

export default userReducer;
