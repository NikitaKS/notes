import React, {FC, useEffect, useState} from 'react';
import {INote, Statuses} from "../helpers/types";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {getNoteForChange} from "../bll/ThunkCreators";
import {AppState} from "../redux/store";
import ReactNoteForm from "../helpers/ReactHookForms/ReactNoteForm";

interface IMatchProps {
    id: string
}

interface IProps extends RouteComponentProps<IMatchProps> {
    handelClick: (newNote: INote) => void
}

const NoteForm: FC<IProps> = ({handelClick, ...props}) => {

    const [noteTitle, setTitle] = useState('');
    const [noteText, setText] = useState('');
    const status = useSelector((state: AppState) => state.root.status);
    const {name, content, id, noteKey} = useSelector((state: AppState) => state.root.noteForChange);
    const currentNoteKey = props.match.params.id;
    const dispatch = useDispatch();
    useEffect(() => {
        if (currentNoteKey) {
            dispatch(getNoteForChange(currentNoteKey));
        }
    }, [currentNoteKey]);

    useEffect(() => {
        if (currentNoteKey) {
            setTitle(name);
            setText(content)
        } else {
            setTitle('');
            setText('')
        }
    }, [currentNoteKey, name]);

    const buttonFormClick = (newNote: INote) => {
        handelClick(newNote);
        setText('');
        setTitle('');
        props.history.push(`/`)
    };

    const onButtonClick = (noteText: string, noteName: string) => {
        let newNote = {
            id: currentNoteKey ? id : Date.now(),
            name: noteName,
            content: noteText,
            noteKey: currentNoteKey || ''
        };
        buttonFormClick(newNote)
    };

    return (
        <div>
            {
                status === Statuses.isLoading || (currentNoteKey && currentNoteKey !== noteKey)
                    ? <span>loading...</span>
                    : <ReactNoteForm name={noteTitle} content={noteText} onButtonClick={onButtonClick}
                    />
            }
        </div>
    );
};

export default withRouter(NoteForm);
