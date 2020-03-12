import React, {FC} from "react";
import s from './main.module.css';

interface IProps {
    changeName: (name: string) => void
    changeContent: (content: string) => void
    title: string
    content: string
}

const Inputs: FC<IProps> = (props) => {
    return (
        <div className={s.addNoteWrapper}>
            <input value={props.title} type="text"
                   placeholder='Enter your title' onChange={(e) => props.changeName(e.currentTarget.value)}/>
            <input value={props.content} type="text"
                   placeholder='Enter your text' onChange={(e) => props.changeContent(e.currentTarget.value)}/>
        </div>
    );
};
export default Inputs;
