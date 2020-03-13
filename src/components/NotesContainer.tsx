import React, {FC, useEffect} from 'react';
import s from './main.module.css';
import {useDispatch} from "react-redux";
import {addNote, changeNote, getNotes} from "../bll/ThunkCreators";
import {INote} from "../helpers/types";
import {withRouter, Route} from 'react-router-dom';
import NoteTabsContainer from './NoteTabsContainer';
import NoteContainer from './NoteContainer';
import NoteForm from "./NoteForm";


const NotesContainer: FC = () => {

    const dispatch = useDispatch();

    const setNewNote = (newNote: INote) => {
        dispatch(addNote(newNote))
    };

    const handelChangeNote = (newNote: INote) => {
        dispatch(changeNote(newNote))
    };

    useEffect(() => {
        dispatch(getNotes())
    }, []);

    return (
        <div className={s.mainWrapper}>
            <Route path='/addNote' render={() => <NoteForm handelClick={setNewNote}/>}/>
            <Route exact path='/' render={() => <NoteTabsContainer/>}/>
            <Route path='/note/:id' render={() => <NoteContainer/>}/>
            <Route path='/changeNote/:id' render={() => <NoteForm handelClick={handelChangeNote}/>}/>
        </div>
    );
};

export default withRouter(NotesContainer);
