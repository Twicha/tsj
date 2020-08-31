import React, { useEffect, useState } from 'react';
import classes from './EditNews.module.scss';
import classNames from 'classnames';
import UserForm from '../../components/UI/UserForm/UserForm';
import { getPost } from '../../posts';
import Loader from '../../components/UI/Loader/Loader';
import GoBackToAdmin from '../../components/UI/GoBackToAdmin/GoBackToAdmin';
import { Redirect } from 'react-router';

const EditNews = (props) => {
    const id = props.match.params.id;
    const [post, setPost] = useState(null);

    useEffect(() => {
        getPost(id).then(res => {
            setPost(res);
        });
    }, []);


    return (
        <div className={classNames('container', classes.EditNews)}>
            <GoBackToAdmin />
            {!post 
            ? <Loader />
            : <UserForm
                type="edit"
                id={id}
                title={post ? post.title : ''}
                text={post ? post.text : ''}
            />
            }
        </div>
    )
}

export default EditNews;
