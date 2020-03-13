import React, {FC} from "react";
import s from './main.module.css';
import ReactCommentForm from "../helpers/ReactHookForms/ReactCommentForm";

interface IProps {
    addNewComment: (author: string, comment: string) => void
}

const AddComment: FC<IProps> = ({addNewComment}) => {

    const handelAddComment = (author: string, comment: string) => {
        addNewComment(author, comment);
    };

    return (
        <div className={s.addCommentWrapper}>
            <ReactCommentForm handelAddComment={handelAddComment}/>
        </div>
    );
};
export default AddComment;
