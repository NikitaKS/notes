import React, {FC} from 'react';
import s from './main.module.css';
import {NavLink} from "react-router-dom";


interface IProps {
    name: string
    content: string
    id: string
}

const Note: FC<IProps> = (props) => {
    return (
        <div className={s.note}>
            <div className={s.noteName}>{props.name}</div>
            <div className={s.noteContent}>{props.content}</div>
            <NavLink to={`/changeNote/${props.id}`}>Change</NavLink>
        </div>
    );
};

export default (Note);
