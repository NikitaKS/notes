import {AppState} from "../redux/store";
import {ThunkAction} from "redux-thunk";
import {AppActions, setNotes, setStatus, setNewNote} from "./actionCreators";
import {apiNotes} from "../dal/api";
import {INote, Statuses} from "../helpers/types";


type ThunkActionType = ThunkAction<Promise<void>, AppState, unknown, AppActions>;

export const getNotes = (): ThunkActionType => async (dispatch, getState) => {
    try {
        dispatch(setStatus(Statuses.isLoading));
        const result = await apiNotes.getNotes();
        dispatch(setNotes(result));
        dispatch(setStatus(Statuses.success));
    } catch (e) {
        dispatch(setStatus(Statuses.error));
    }
};
export const addNote = (newNote: INote): ThunkActionType => async (dispatch, getState) => {
    const result = await apiNotes.addNewNote(newNote);
    if (result.resultCode === 0 && result.data) {
        dispatch(setNewNote(result.data));
    } else {
        dispatch(setStatus(Statuses.error));
    }
};
export const deleteNote = (id: number): ThunkActionType => async (dispatch, getState) => {
    const result = await apiNotes.deleteNote(id);
    if (result.resultCode === 0 && result.data) {
        // dispatch(setNewNote(result.data));
    } else {
        dispatch(setStatus(Statuses.error));
    }
};
