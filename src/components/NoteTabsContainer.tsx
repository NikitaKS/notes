import React, {FC} from 'react';
import s from './main.module.css';
import NoteTab from "./NoteTab";
import {INote} from '../helpers/types';
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../redux/store";
import {deleteNote} from '../bll/ThunkCreators';
import {NavLink} from "react-router-dom";


const NoteTabsContainer: FC = () => {

    const dispatch = useDispatch();
    const notes = useSelector((state: AppState) => state.root.notes);


    const del = (noteKey: string) => {
        dispatch(deleteNote(noteKey))
    };

    let notesElements = notes.map((note: INote) => {
        return <NoteTab key={note.id} noteKey={note.noteKey} id={note.id}
                        name={note.name} del={del}/>
    });

    return (
        <div className={s.notesTabsWrapper}>
            {notesElements}
            <NavLink className={s.addButton} to='/addNote'>ADD NOTE</NavLink>
        </div>
    );
};

export default NoteTabsContainer;
