import React, { useState } from 'react';
import classes from './UserForm.module.scss';
import classNames from 'classnames';
import { Link, Redirect } from 'react-router-dom';
import Input from '../Input/Input';
import ReactQuill from 'react-quill';
import { createPostedTime } from '../../../functions';
import { createPost, editPost } from '../../../posts';

const UserForm = ({title, text, type, id}) => {
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

    const [titleValue, setTitleValue] = useState(title);
    const [textValue, setTextValue] = useState(text);    
    const [post, setPost] = useState({});    
    const [sended, setSended] = useState(false);    

    const changeTitleHandler = (e) => {
        setTitleValue(e.target.value);
    }

    const changeTextHandler = (e) => {
        setTextValue(e)
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        const posted = createPostedTime();

        let post = {
            title: titleValue,
            text: textValue
        };

        if (type === 'create') {
            post.posted = posted;
        }

        await setPost(post);
        
        try {
            if (type === 'create') {
                await createPost(post).then((res) => {
                    setTitleValue('');
                    setTextValue('');
                });
            } else if (type === 'edit') {
                await editPost(id, post).then((res) => {
                    setTitleValue('');
                    setTextValue('');
                    setSended(true);
                });
            }
        } catch (e) {
            console.log(e);
        }
    }

    if (sended) {
        return (
            <Redirect to="/admin" />
        );
    }

    return (
        <form className={classNames(classes.UserForm)}>
            <Input
                className={classes.UserForm__Title}
                title="Название новости"
                placeholder="Введите название новости..."
                type="text"
                name="title"
                value={titleValue}
                onChange={changeTitleHandler}
                // invalid
            />
            <div className={classNames(classes.FormControl)}>
                <label htmlFor="text">
                    Контент новости
                </label>
                <ReactQuill 
                    id="text"
                    modules={modules} 
                    theme="snow" 
                    value={textValue} 
                    onChange={changeTextHandler}
                />
            </div>
            <button
                className={classNames('btn', classes.UserForm__SubmitBtn)}
                onClick={submitHandler}
            >
                {type === 'create' ? 'Создать новость' : 'Изменить новость'}
            </button>
        </form>
    )
}

export default UserForm;
