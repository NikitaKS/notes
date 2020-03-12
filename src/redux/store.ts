import {combineReducers, createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {reducer} from "./reducer";
import {reducer as formReducer} from "redux-form";

const rootReducer = combineReducers({
    root: reducer,
    form: formReducer
});

export type AppState = ReturnType<typeof rootReducer>

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
// @ts-ignore
window.store = store;
