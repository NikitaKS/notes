import {AppActions} from "../bll/actionCreators";
import {
    ADD_NOTE,
    CHANGE_NOTE,
    DELETE_NOTE,
    GET_COMMENTS,
    GET_NOTES,
    SET_STATUS,
    ADD_COMMENT
} from "../helpers/constants";
import {IComment, INote, Statuses} from "../helpers/types";

let initialState = {
    notes: [] as INote[],
    comments: [] as IComment[],
    status: Statuses.notInit
};

type StateType = typeof initialState;

export const reducer = (state = initialState, action: AppActions): StateType => {
    switch (action.type) {
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case GET_NOTES: {
            return {...state, notes: action.notes}
        }
        case GET_COMMENTS: {
            return {...state, comments: action.comments}
        }
        case ADD_NOTE: {
            return {...state, notes: [...state.notes, action.newNote]}
        }
        case ADD_COMMENT: {
            return {...state, comments: [...state.comments, action.newComment]}
        }
        case DELETE_NOTE: {
            return {...state, notes: state.notes.filter((note) => note.noteKey !== action.noteKey)}
        }
        case CHANGE_NOTE: {
            return {
                ...state,
                notes: state.notes.map((note) => {
                    if (note.noteKey === action.changedNote.noteKey) {
                        return {...action.changedNote}
                    } else {
                        return note
                    }
                })
            }
        }
        default: {
            return state
        }
    }
};
