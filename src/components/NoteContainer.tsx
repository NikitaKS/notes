import React, {FC, useEffect, useState} from 'react';
import s from './main.module.css';
import {withRouter, RouteComponentProps} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../redux/store";
import {IComment, INote} from "../helpers/types";
import Note from "./Note";
import {addComment, getComments} from "../bll/ThunkCreators";
import CommentsContainer from "./CommentsContainer";

interface MatchProps {
    id: string
}

interface IProps extends RouteComponentProps<MatchProps> {

}

const NoteContainer: FC<IProps> = (props) => {
    const dispatch = useDispatch();
    const currentNoteKey = props.match.params.id;
    useEffect(() => {
        dispatch(getComments(currentNoteKey))
    }, []);

    const currentNote = useSelector((state: AppState) => state.root.notes.find((n: INote) => {
        return n.noteKey === currentNoteKey
    }));
    const comments = useSelector((state: AppState) => state.root.comments);


    const addNewComment = (author: string, comment: string) => {
        let newComment = {
            author,
            content: comment,
            createdAt: Date.now(),
            noteKey: currentNoteKey,
            commentKey: ''
        };
        dispatch(addComment(newComment))
    };

    return (
        <div className={s.noteWrapper}>
            <Note name={currentNote && currentNote.name} content={currentNote && currentNote.content}/>
            <CommentsContainer comments={comments} addNewComment={addNewComment}/>
        </div>
    );
};

export default withRouter(NoteContainer);
