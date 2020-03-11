import React, {FC, useState} from 'react';
import {INote} from "../helpers/types";
import s from './main.module.css';

interface IProps {
    setNewNote: (newNote: INote) => void
}

const AddNote: FC<IProps> = ({setNewNote}) => {

    const [noteTitle, setTitle] = useState('');
    const [noteText, setText] = useState('');

    const addNewNote = () => {
        let newNote = {id: Date.now(), name: noteTitle, content: noteText};
        noteText !== '' && noteTitle !== '' && setNewNote(newNote);
        setText('');
        setTitle('');
    };

    return (
        <div className={s.addNoteWrapper}>
            <input value={noteTitle} type="text"
                   placeholder='Enter your title' onChange={(e) => setTitle(e.currentTarget.value)}/>
            <input value={noteText} type="text"
                   placeholder='Enter your text' onChange={(e) => setText(e.currentTarget.value)}/>
            <button onClick={addNewNote}>+</button>
        </div>
    );
};

export default AddNote;
