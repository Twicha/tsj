import React, { Component } from 'react';
import classes from './CreateNews.module.scss';
import classNames from 'classnames';
import { createPostedTime } from '../../functions';
import { createPost } from '../../posts';
import 'react-quill/dist/quill.snow.css';
import UserForm from '../../components/UI/UserForm/UserForm';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import GoBackToAdmin from '../../components/UI/GoBackToAdmin/GoBackToAdmin';

export class CreateNews extends Component {
    state = {
        post: {},
        title: '',
        text: '',
        
    }

    changeTitleHandler = (e) => {
        this.setState({
            title: e.target.value
        });
    }

    changeTextHandler = (e) => {
        this.setState({
            text: e
        });
    }

    submitHandler = async (e) => {
        e.preventDefault();

        const posted = createPostedTime();

        let post = {
            title: this.state.title,
            text: this.state.text,
            posted: posted
        };

        await this.setState({
            post: post
        });
        
        try {
            await createPost(this.state.post).then((res) => {
                this.setState({
                    title: '',
                    text: ''
                });
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {

        return (
            <div className={classNames('container', classes.CreateNews)}>
                <GoBackToAdmin />
                <UserForm
                    type="create"
                    title={this.state.title}
                    text={this.state.text}
                    submitHandler={this.submitHandler}
                />
            </div>
        )
    }
}

export default CreateNews;
