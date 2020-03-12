import React, {FC, useState} from "react";
import s from './main.module.css';
import {IComment} from "../helpers/types";
import Comment from "./Comment";
import AddComment from "./AddComment";

interface IProps {
    addNewComment: (author: string, comment: string) => void
    comments: IComment[]
}

const CommentsContainer: FC<IProps> = ({addNewComment, comments}) => {
    const commentsEl = comments.map((c: IComment) => (
        <Comment key={c.commentKey} name={c.author} content={c.content} data={c.createdAt}/>
    ));
    return (
        <div className={s.commentWrapper}>
            {comments.length === 0 ? <span>No Comments....</span> : commentsEl}
            <AddComment addNewComment={addNewComment}/>
        </div>
    );
};
export default CommentsContainer;
