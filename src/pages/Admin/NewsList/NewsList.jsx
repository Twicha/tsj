import React, { Component } from 'react';
import classes from './NewsList.module.scss';
import classNames from 'classnames';
import { getPosts, deletePost } from '../../../posts';
import { postedTime } from '../../../functions';
import { Link } from 'react-router-dom';
import {Loader} from '../../../components/UI';

export class NewsList extends Component {
    state = {
        posts: [],
        loading: true
    }

    componentDidMount() {
        getPosts().then(res => {
            const arr = [];

            Object.keys(res).forEach((key, index) => {
                res[key].postId = key;
                arr.push(res[key]);
            })
    
            arr.reverse();

            this.setState({
                posts: arr,
                loading: false
            });
        });
    }

    deletePost = (id) => {
        if (window.confirm("Вы точно хотите удалить данную новость?")) {
            deletePost(id).then(res => {
                const arr = this.state.posts.filter(n => n.postId !== id);
    
                this.setState({
                    posts: arr
                })
            })
        }
    }

    renderList = () => {
        return this.state.posts.map((post, i) => {
            const path = `/admin/edit-news/${post.postId}`;
            
            return (
                <li 
                    key={post.postId} 
                    className={classNames(classes.NewsList, 'bs-1')}
                >
                    <h2>{post.title ? post.title : null}</h2>
                    <div className={classNames(classes.Wrapper)}>
                        <small>Запись опубликована {post.posted ? postedTime(post.posted) : null}</small>
                        <div className={classNames(classes.ControlsWrap)}>
                            <Link 
                                to={path} 
                                className={classNames(classes.Edit, 'btn')}
                            >
                                Изменить
                            </Link>
                            <button className={classNames(classes.Delete, 'btn')} onClick={() => {this.deletePost(post.postId)}}>Удалить</button>
                        </div>
                    </div>
                </li>
            )
        });
    }

    render() {

        const newsList = (
            <ul className={classNames(classes.NewsList)}>
                {this.renderList()}
            </ul>
        );

        return (
            <React.Fragment>
                {this.state.loading ? <Loader /> : newsList}
            </React.Fragment>
        )
    }
}

export default NewsList;
