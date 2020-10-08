import React from 'react';
import 'react-quill/dist/quill.snow.css';
import classes from './CreateNews.module.scss';
import classNames from 'classnames';
import { createPostedTime } from '../../functions';
import { createPost } from '../../posts';
import { DOCUMENT_TITLE } from '../../variables';
import {UserForm, GoBackToAdmin} from '../../components/UI';

const CreateNews = () => {
    const [post, setPost] = React.useState({
        title: '',
        text: ''
    });
    const [submitted, setSubmitted] = React.useState(false);

    React.useEffect(() => {
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
                setPost({
                    title: '',
                    text: ''
                });

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

