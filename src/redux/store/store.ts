import { legacy_createStore as createStore, applyMiddleware } from 'redux';

import { thunk } from 'redux-thunk';
import rootReducer from "../reducer/index.ts"

const store = createStore(rootReducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export default store;