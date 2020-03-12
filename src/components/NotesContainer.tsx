import React, {FC, useEffect} from 'react';
import s from './main.module.css';
import AddNote from './AddNote';
import {useDispatch, useSelector} from "react-redux";
import {addNote, getNotes} from "../bll/ThunkCreators";
import {AppState} from "../redux/store";
import {INote, Statuses} from "../helpers/types";
import {withRouter, Route} from 'react-router-dom';
import NoteTabsContainer from './NoteTabsContainer';
import NoteContainer from './NoteContainer';


const NotesContainer: FC = () => {

    const dispatch = useDispatch();

    const status = useSelector((state: AppState) => state.root.status);

    const setNewNote = (newNote: INote) => {
        dispatch(addNote(newNote))
    };

    useEffect(() => {
        dispatch(getNotes())
    }, []);

    return (
        <div className={s.mainWrapper}>
            {status === Statuses.isLoading && <div>Loading...</div>}
            <Route path='/addNote' render={() => <AddNote setNewNote={setNewNote}/>}/>
            <Route exact path='/' render={() => <NoteTabsContainer/>}/>
            <Route path='/note/:id' render={() => <NoteContainer/>}/>
            <Route path='/changeNote' render={() => <AddNote setNewNote={setNewNote}/>}/>
        </div>
    );
};

export default withRouter(NotesContainer);
