import React, {FC} from "react";
import s from './main.module.css';

const defaultAvatar = require("../assets/default-avatar.png");

interface IProps {
    name: string
    content: string
    data: number
}

const Comment: FC<IProps> = ({name, content, data}) => {
    let createdDate = new Date(data).toDateString();
    return (
        <div className={s.comment}>
            <div className={s.avatar}>
                <img src={defaultAvatar} alt=""/>
            </div>
            <div className={s.commentContent}>
                <div className={s.author}>{name}</div>
                <div className={s.text}>{content}</div>
                <div className={s.date}>{createdDate}</div>
            </div>
        </div>
    );
};
export default Comment;
