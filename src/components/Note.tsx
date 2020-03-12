import React, {FC} from 'react';
import s from './main.module.css';
import {NavLink} from "react-router-dom";


interface IProps {
    name: string | undefined
    content: string | undefined
}

const Note: FC<IProps> = (props) => {
    // const [editMode, setEditMode] = useState(false);
    // const [newName, setName] = useState(name);
    // const [newContent, setContent] = useState(content);
    //
    // const deleteNote = () => {
    //     del(noteKey)
    // };
    //
    // const saveNote = () => {
    //     const changedNote = {name: newName, content: newContent, id, noteKey};
    //     saveChanges(changedNote);
    //     setEditMode(!editMode)
    // };
    return (
        <div className={s.note}>
            <div className={s.noteName}>{props.name}</div>
            <div className={s.noteContent}>{props.content}</div>
            <NavLink to='/changeNote'>Change</NavLink>
        </div>
    );
};

export default (Note);
