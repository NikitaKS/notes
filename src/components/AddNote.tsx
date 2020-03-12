import React, {FC, useState} from 'react';
import {INote} from "../helpers/types";
import s from './main.module.css';
import Inputs from "./Inputs";
import {withRouter, RouteComponentProps} from 'react-router-dom';

interface IProps {
    setNewNote: (newNote: INote) => void
}

const AddNote: FC<IProps & RouteComponentProps> = ({setNewNote, ...props}) => {

    const [noteTitle, setTitle] = useState('');
    const [noteText, setText] = useState('');

    const addNewNote = () => {
        let newNote = {id: Date.now(), name: noteTitle, content: noteText, noteKey: ''};
        if (noteText !== '' && noteTitle !== '') {
            setNewNote(newNote);
            setText('');
            setTitle('');
            props.history.push('/')
        }
    };

    return (
        <div className={s.addNoteWrapper}>
            <Inputs changeName={setTitle} changeContent={setText} title={noteTitle} content={noteText}/>
            <button onClick={addNewNote}>+</button>
        </div>
    );
};

export default withRouter(AddNote);
