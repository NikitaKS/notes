import React, {FC} from 'react';
import s from './main.module.css';
import Note from "./Note";
import { INote } from '../helpers/types';
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../redux/store";
import { deleteNote } from '../bll/ThunkCreators';


const Notes: FC = () => {
    const dispatch = useDispatch();
    const notes = useSelector((state: AppState) => state.root.notes);

    const del = (id:number)=>{
        dispatch(deleteNote(id))
    };

    let notesElements = notes.map((note:INote)=>{
        return <Note key={note.id} id={note.id} name={note.name} content={note.content} del={del}/>
    });

    return (
        <div className={s.notesWrapper}>
            {notesElements}
        </div>
    );
};

export default Notes;
