import React, { useEffect, useState } from 'react';
import classes from './EditNews.module.scss';
import classNames from 'classnames';
import UserForm from '../../components/UI/UserForm/UserForm';
import { editPost, getPost } from '../../posts';
import Loader from '../../components/UI/Loader/Loader';
import GoBackToAdmin from '../../components/UI/GoBackToAdmin/GoBackToAdmin';
import { useHistory } from 'react-router';
import { DOCUMENT_TITLE } from '../../variables';

const EditNews = (props) => {
    const history = useHistory();

    const id = props.match.params.id;
    const [post, setPost] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        document.title = `${DOCUMENT_TITLE}Изменение новости`;

        getPost(id).then(res => {
            setPost(res);
            
            document.title = `${DOCUMENT_TITLE}Изменение новости`;
        });
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
            ...post
        };
        
        try {
            await editPost(id, sendPost).then(() => {
                setSubmitted(false);

                history.push('/admin')
            });
        } catch (e) {
            console.log(e);

            setSubmitted(false);
        }
    }


    return (
        <div className={classNames('container', classes.EditNews)}>
            <GoBackToAdmin />
            {!post 
            ? <Loader />
            : <UserForm
                id={id}
                title={post ? post.title : ''}
                text={post ? post.text : ''}
                buttonText="Изменить новость"
                changeTitle={changeTitleHandler}
                changeText={changeTextHandler}
                onSubmit={submitHandler}
                submitted={submitted}
            />
            }
        </div>
    )
}

export default EditNews;
