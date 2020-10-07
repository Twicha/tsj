import React, { useEffect, useState } from 'react';
import classes from './CreateNews.module.scss';
import classNames from 'classnames';
import { createPostedTime } from '../../functions';
import { createPost } from '../../posts';
import 'react-quill/dist/quill.snow.css';
import UserForm from '../../components/UI/UserForm/UserForm';
import GoBackToAdmin from '../../components/UI/GoBackToAdmin/GoBackToAdmin';
import { DOCUMENT_TITLE } from '../../variables';

const CreateNews = () => {
    const [post, setPost] = useState({
        title: '',
        text: ''
    });
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        document.title = `${DOCUMENT_TITLE}Создание новости`;
    }, []);

    const changeTitleHandler = (e) => {
        setPost({
            ...post,
            title: e.target.value
        });
    }

    const changeTextHandler = (e) => {
        setPost({
            ...post,
            text: e
        });
    }

    const cleanInputs = () => {
        setPost({
            title: '',
            text: ''
        });
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        setSubmitted(true);

        const sendPost = {
            ...post,
            posted: createPostedTime()
        };
        
        try {
            console.log(sendPost);
            await createPost(sendPost).then(() => {
                cleanInputs();

                setSubmitted(false);
            });
        } catch (e) {
            console.log(e);

            setSubmitted(false);
        }
    }

    return (
        <div className={classNames('container', classes.CreateNews)}>
            <GoBackToAdmin />
            <UserForm
                title={post.title}
                text={post.text}
                buttonText="Создать новость"
                changeTitle={changeTitleHandler}
                changeText={changeTextHandler}
                onSubmit={submitHandler}
                submitted={submitted}
            />
        </div>
    )
}

export default CreateNews;

