import {AppState} from "../redux/store";
import {ThunkAction} from "redux-thunk";
import {
    AppActions,
    setNotes,
    setStatus,
    setNewNote,
    deleteNoteAC,
    setChangedNote,
    setComments,
    setNewComment, setNoteForChange
} from "./actionCreators";
import {apiNotes} from "../dal/api";
import {IComment, INote, Statuses} from "../helpers/types";


type ThunkActionType = ThunkAction<Promise<void>, AppState, unknown, AppActions>;

export const getNotes = (): ThunkActionType => async (dispatch) => {
    try {
        dispatch(setStatus(Statuses.isLoading));
        const result = await apiNotes.getNotes();
        dispatch(setNotes(result));
        dispatch(setStatus(Statuses.success));
    } catch (e) {
        console.log(e.response.data.error);
        dispatch(setStatus(Statuses.error));
    }
};

export const getNoteForChange = (noteKey: string): ThunkActionType => async (dispatch) => {
    try {
        dispatch(setStatus(Statuses.isLoading));
        const noteForChange = await apiNotes.getNoteForChange(noteKey);
        dispatch(setNoteForChange(noteForChange));
        dispatch(setStatus(Statuses.success));
    } catch (e) {
        console.log(e.response.data.error);
        dispatch(setStatus(Statuses.error));
    }
};

export const addNote = (newNote: INote): ThunkActionType => async (dispatch) => {
    try {
        const noteKey = await apiNotes.addNewNote(newNote);
        dispatch(setNewNote({...newNote, noteKey: noteKey.name}));
    } catch (e) {
        console.log(e.response.data.error);
        dispatch(setStatus(Statuses.error));
    }
};
export const deleteNote = (noteKey: string): ThunkActionType => async (dispatch) => {
    try {
        await apiNotes.deleteNote(noteKey);
        dispatch(deleteNoteAC(noteKey))
    } catch (e) {
        console.log(e.response.data.error);
        dispatch(setStatus(Statuses.error));
    }
};
export const changeNote = (changedNote: INote): ThunkActionType => async (dispatch) => {
    try {
        await apiNotes.changeNote(changedNote);
        dispatch(setChangedNote(changedNote))
    } catch (e) {
        console.log(e.response.data.error);
        dispatch(setStatus(Statuses.error));
    }
};
export const getComments = (currentNoteKey: string): ThunkActionType => async (dispatch) => {
    try {
        dispatch(setStatus(Statuses.isLoading));
        const comments = await apiNotes.getComments(currentNoteKey);
        dispatch(setComments(comments));
        dispatch(setStatus(Statuses.success));

    } catch (e) {
        console.log(e.response.data.error);
        dispatch(setStatus(Statuses.error));
    }
};
export const addComment = (newComment: IComment): ThunkActionType => async (dispatch) => {
    try {
        const commentKey = await apiNotes.addNewComment(newComment);
        dispatch(setNewComment({...newComment, commentKey: commentKey.name}));
    } catch (e) {
        console.log(e.response.data.error);
        dispatch(setStatus(Statuses.error));
    }
};
