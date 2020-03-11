import React, {FC, useEffect} from 'react';
import AddNote from './AddNote';
import Notes from "./Notes";
import {useDispatch, useSelector} from "react-redux";
import {addNote, getNotes} from "../bll/ThunkCreators";
import {AppState} from "../redux/store";
import {INote, Statuses} from "../helpers/types";


const NotesContainer: FC = () => {

    const dispatch = useDispatch();

    const status = useSelector((state: AppState) => state.root.status);

    const setNewNote = (newNote: INote)=>{
        dispatch(addNote(newNote))
    };

    useEffect(() => {
        dispatch(getNotes())
    }, []);

    return (
        <div>
            {status === Statuses.isLoading && <div>Loading...</div>}
            <AddNote setNewNote={setNewNote}/>
            <Notes/>
        </div>
    );
};

export default NotesContainer;
