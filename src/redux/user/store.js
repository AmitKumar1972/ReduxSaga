import { createStore } from "redux";
import userReducer from "./userReducer";
import createSagaMiddleware from "redux-saga";
import { applyMiddleware } from "redux";
import userSaga from "./userSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(userReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(userSaga);
export default store;
