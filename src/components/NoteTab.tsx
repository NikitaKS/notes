import React, {FC} from 'react';
import s from './main.module.css';
import {NavLink} from "react-router-dom";

interface IProps {
    id: number
    name: string
    noteKey: string
    del: (noteKey: string) => void
}

const NoteTab: FC<IProps> = ({id, name, noteKey, del}) => {
    const deleteNote = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        del(noteKey)
    };

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
