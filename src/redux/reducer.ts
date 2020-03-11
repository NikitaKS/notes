import {AppActions} from "../bll/actionCreators";
import {GET_NOTES, SET_STATUS, ADD_NOTE} from "../helpers/constants";
import {INote, Statuses} from "../helpers/types";

let initialState = {
    notes: [] as INote[],
    status: Statuses.notInit
};

type StateType = typeof initialState;

export const reducer = (state = initialState, action: AppActions): StateType => {
    switch (action.type) {
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case GET_NOTES: {
            return {
                ...state,
                notes: action.notes
            }
        }
        case ADD_NOTE: {
            return {...state, notes: [...state.notes, action.newNote]}
        }
        default: {
            return state
        }
    }
};
