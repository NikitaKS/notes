import React, {ChangeEvent, FC, useState} from "react";
import s from './main.module.css';

interface IProps {
    addNewComment: (author: string, comment: string) => void
}

const AddComment: FC<IProps> = ({addNewComment}) => {
    const [author, setAuthor] = useState('');
    const [comment, setComment] = useState('');

    const handelAuthorName = (e: ChangeEvent<HTMLInputElement>) => {
        setAuthor(e.currentTarget.value)
    };
    const handelComment = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.currentTarget.value)
    };

    const handelAddComment = () => {
            addNewComment(author, comment);
            setAuthor('');
            setComment('');
    };

    return (
        <div className={s.addCommentWrapper}>
            <input onChange={handelAuthorName} value={author} placeholder='Enter your Name' type="text"/>
            <textarea onChange={handelComment} value={comment} placeholder='Enter your comment'/>
            <button onClick={handelAddComment} className={s.addCommentButton}>add</button>
        </div>
    );
};
export default AddComment;
