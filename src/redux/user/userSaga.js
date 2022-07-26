import { takeEvery, put } from "redux-saga/effects";
import { FETCH_USER, FETCH_USER_SHOW } from "./constant";

function* getUsers() {
  let data = yield fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => {
      return response.json();
    }
  );
  data = data.map((user) => user.name);
  yield put({ type: FETCH_USER_SHOW, data });
}

function* userSaga() {
  yield takeEvery(FETCH_USER, getUsers);
}

export default userSaga;
