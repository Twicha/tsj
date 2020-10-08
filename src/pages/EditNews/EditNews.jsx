import React from 'react';
import { useHistory } from 'react-router';
import classes from './EditNews.module.scss';
import classNames from 'classnames';
import { editPost, getPost } from '../../posts';
import { DOCUMENT_TITLE } from '../../variables';
import {UserForm, Loader, GoBackToAdmin} from '../../components/UI';

const EditNews = (props) => {
    const history = useHistory();

    const id = props.match.params.id;
    const [post, setPost] = React.useState(null);
    const [submitted, setSubmitted] = React.useState(false);

    React.useEffect(() => {
        document.title = `${DOCUMENT_TITLE}Изменение новости`;

        getPost(id).then(res => {
            setPost(res);
        });
        // почему он хочет в зависимостях иметь id??????
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
