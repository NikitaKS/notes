import React, {FC} from "react";
import {useForm} from "react-hook-form";
import s from './forms.module.css';

type FormData = {
    author: string;
    commentContent: string;
};

interface IProps {
    handelAddComment: (author: string, comment: string) => void
}

const ReactCommentForm: FC<IProps> = (props) => {
    const {register, handleSubmit, errors, reset} = useForm<FormData>({
        mode: 'onBlur',
    });
    const onSubmit = (data: FormData) => {
        props.handelAddComment(data.author, data.commentContent);
        reset();
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={s.addCommentWrapper}>
                <input className={errors.author && `${s.error}`} type="text" placeholder='Enter your Name'
                       name={'author'} autoComplete={'off'}
                       ref={register({
                           required: true,
                           pattern: /^([A-Z][a-z]*(\s+[A-Z][a-z]*))$/
                       })}
                />
                {
                    errors.author && errors.author.type === 'pattern' && <span>Filed must be "John Johnson"</span>
                }
                <textarea placeholder='Enter your comment' ref={register({required: true})}
                          name={'commentContent'}
                />
                {errors.commentContent && <span>Field is required</span>}
                <button className={s.addCommentButton}>add comment</button>
            </div>
        </form>
    );
};
export default ReactCommentForm;
