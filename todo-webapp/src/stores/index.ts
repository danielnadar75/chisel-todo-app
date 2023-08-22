import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducers from "../reducers";
import rootSaga from "../sagas";
import { AUTH } from "../constants";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducers,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

const authToken = localStorage.getItem("authToken");
if (authToken) {
  console.log("[Store] App initialized with authToken!", authToken);
  store.dispatch({ type: AUTH.LOGIN, auth: { access_token: authToken } });
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
