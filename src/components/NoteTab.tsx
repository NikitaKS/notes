import React, {FC, useState} from 'react';
import s from './main.module.css';
import Inputs from "./Inputs";
import {INote} from "../helpers/types";
import {NavLink} from "react-router-dom";

interface IProps {
    id: number
    name: string
    noteKey: string
    del: (noteKey: string) => void
}

const NoteTab: FC<IProps> = ({id, name, noteKey, del}) => {
    // const [editMode, setEditMode] = useState(false);
    // const [newName, setName] = useState(name);
    // const [newContent, setContent] = useState(content);
    //
    const deleteNote = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        del(noteKey)
    };
    //
    // const saveNote = () => {
    //     const changedNote = {name: newName, content: newContent, id, noteKey};
    //     saveChanges(changedNote);
    //     setEditMode(!editMode)
    // };

    return (
        <div className={s.noteTabWrapper}>
            <NavLink to={`/note/${noteKey}`}>
                <div className={s.note}>
                    <div className={s.name}>{name}</div>
                </div>
            </NavLink>
            <button onClick={deleteNote}>X</button>
        </div>
    );
};

export default NoteTab;
