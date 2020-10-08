import React from 'react';
import classes from './UserForm.module.scss';
import classNames from 'classnames';
import Input from '../Input/Input';
import ReactQuill from 'react-quill';

const modules = {
    toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],

        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction

        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],

        ['image', 'video'],

        ['clean']                                         // remove formatting button
    ]
};

const UserForm = ({title, text, buttonText, changeTitle, changeText, onSubmit, submitted}) => {
     

    return (
        <form className={classNames(classes.UserForm)}>
            <Input
                className={classes.UserForm__Title}
                title="Название новости"
                placeholder="Введите название новости..."
                type="text"
                name="title"
                value={title}
                onChange={changeTitle}
            />
            <div className={classNames(classes.FormControl)}>
                <label htmlFor="text">
                    Контент новости
                </label>
                <ReactQuill 
                    id="text"
                    modules={modules} 
                    theme="snow" 
                    value={text} 
                    onChange={changeText}
                />
            </div>
            <button
                type="submit"
                className={classNames('btn', classes.UserForm__SubmitBtn)}
                onClick={onSubmit}
                disabled={submitted}
            >
                {buttonText}
            </button>
        </form>
    )
}

export default UserForm;
