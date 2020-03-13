import {
    ADD_NOTE,
    CHANGE_NOTE,
    DELETE_NOTE,
    GET_NOTES,
    SET_STATUS,
    GET_COMMENTS,
    ADD_COMMENT, GET_NOTE_FOR_CHANGE
} from "../helpers/constants";
import {IComment, INote, Statuses} from "../helpers/types";

interface IGetNotes {
    type: typeof GET_NOTES,
    notes: INote[]
}

interface ISetStatus {
    type: typeof SET_STATUS,
    status: Statuses
}

interface IAddNote {
    type: typeof ADD_NOTE,
    newNote: INote
}

interface IDeleteNote {
    type: typeof DELETE_NOTE,
    noteKey: string
}

interface IChangeNote {
    type: typeof CHANGE_NOTE,
    changedNote: INote
}

interface IGetComments {
    type: typeof GET_COMMENTS,
    comments: IComment[]
}

interface IAddComment {
    type: typeof ADD_COMMENT,
    newComment: IComment
}

interface IGetNoteForChange {
    type: typeof GET_NOTE_FOR_CHANGE,
    note: INote
}

export type AppActions = IGetNotes
    | ISetStatus
    | IAddNote
    | IDeleteNote
    | IChangeNote
    | IGetComments
    | IAddComment
    | IGetNoteForChange;

export const setNotes = (notes: INote[]): IGetNotes => ({type: GET_NOTES, notes});
export const setStatus = (status: Statuses): ISetStatus => ({type: SET_STATUS, status});
export const setNewNote = (newNote: INote): IAddNote => ({type: ADD_NOTE, newNote});
export const deleteNoteAC = (noteKey: string): IDeleteNote => ({type: DELETE_NOTE, noteKey});
export const setChangedNote = (changedNote: INote): IChangeNote => ({type: CHANGE_NOTE, changedNote});
export const setComments = (comments: IComment[]): IGetComments => ({type: GET_COMMENTS, comments});
export const setNewComment = (newComment: IComment): IAddComment => ({type: ADD_COMMENT, newComment});
export const setNoteForChange = (note: INote): IGetNoteForChange => ({type: GET_NOTE_FOR_CHANGE, note});
