import React, {FC} from "react";
import s from './main.module.css';
import {IComment, Statuses} from "../helpers/types";
import Comment from "./Comment";
import AddComment from "./AddComment";
import {useSelector} from "react-redux";
import {AppState} from "../redux/store";

interface IProps {
    addNewComment: (author: string, comment: string) => void
    comments: IComment[]
    noteKey: string
}

const CommentsContainer: FC<IProps> = ({addNewComment, comments, noteKey}) => {

    const commentsEl = comments.map((c: IComment) => (
        <Comment key={c.commentKey} name={c.author} content={c.content} data={c.createdAt}/>
    ));
    const status = useSelector((state: AppState) => state.root.status);

    if (status === Statuses.isLoading || (comments[0] && noteKey !== comments[0].noteKey)) {
        return <span>loading...</span>
    }
    return (
        <div className={s.commentWrapper}>
            {comments.length === 0 ? <span>No Comments....</span> : commentsEl}
            <AddComment addNewComment={addNewComment}/>
        </div>
    );
};
export default CommentsContainer;
