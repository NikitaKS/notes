import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {reducer} from "./reducer";

const rootReducer = combineReducers({
    root: reducer
});

export type AppState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
// @ts-ignore
window.store = store;
