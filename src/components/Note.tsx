import React, {FC} from 'react';
import s from './main.module.css';

interface IProps {
    id: number
    name: string
    content: string
    del: (id: number) => void
}

const Note: FC<IProps> = ({id, name, content,del}) => {

    const deleteNote = () => {
        del(id)
    };

    return (
        <div className={s.noteWrapper}>
            <div className={s.name}>{name}</div>
            <div className={s.content}>{content}</div>
            <button onClick={deleteNote} className={s.deleteButton}>x</button>
        </div>
    );
};

export default Note;
