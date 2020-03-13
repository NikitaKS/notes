import React, {FC} from "react";
import {useForm} from "react-hook-form";
import s from './forms.module.css';

type FormData = {
    noteName: string;
    noteText: string;
};

interface IProps {
    onButtonClick: (noteText: string, noteName: string) => void
    name: string
    content: string
}

const ReactNoteForm: FC<IProps> = (props) => {
    const {register, handleSubmit, errors} = useForm<FormData>({
        mode: 'onBlur',
        defaultValues: {
            noteName: props.name,
            noteText: props.content
        }
    });
    const onSubmit = (data: FormData) => {
        props.onButtonClick(data.noteText, data.noteName)
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.noteFormWrapper}>
                <input placeholder={'Note Name'}
                       className={errors.noteName ? `${s.nameInput} ${s.error}` : s.nameInput}
                       name="noteName"
                       ref={register({required: true})}/>
                <textarea className={errors.noteText ? `${s.noteContent} ${s.error}` : s.noteContent}
                          name="noteText" placeholder={'Note Content'}
                          ref={register({required: true})}/>
                <button className={s.formButton}>add</button>
            </div>
        </form>
    );
};
export default ReactNoteForm;
