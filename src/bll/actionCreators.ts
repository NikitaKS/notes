import {ADD_NOTE, GET_NOTES, SET_STATUS} from "../helpers/constants";
import {INote, Statuses} from "../helpers/types";

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
    newNote:INote
}

export type AppActions = IGetNotes | ISetStatus | IAddNote;

export const setNotes = (notes: INote[]): IGetNotes => ({type: GET_NOTES, notes});
export const setStatus = (status: Statuses): ISetStatus => ({type: SET_STATUS, status});
export const setNewNote = (newNote:INote): IAddNote => ({type: ADD_NOTE,newNote});
