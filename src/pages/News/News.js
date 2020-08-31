import React, { Component, Children } from 'react';
import classes from './News.module.scss';
import classNames from 'classnames';
import { getPosts } from '../../posts';
import NewsList from '../../components/UI/NewsList/NewsList';
import Search from './Search/Search';

export class News extends Component {
    state = {
        value: '',
        posts: [{},{},{},{},{},{},{},{},{},{}],
        oldPosts: [],
        loading: true,
        noSearch: true,
        notFound: false
    }

    componentDidMount() {
        
        getPosts().then(res => {
            const arr = [];
            console.log(1);

            Object.keys(res).forEach((key, index) => {
                res[key].postId = key;
                arr.push(res[key]);
            })
    
            arr.reverse();
            
            this.setState({
                posts: arr,
                oldPosts: arr,
                loading: false
            })
        });
    }

    searchHandler = (e) => {
        if(!e.target.value.trim()) {
            this.deleteHandler();

            return;
        }

        let posts = [];

        posts = [...this.state.oldPosts.filter(post => post.title.toLowerCase().includes(e.target.value.toLowerCase()))];

        if (!posts.length) {
            this.setState({
                notFound: true
            });
        } else {
            this.setState({
                notFound: false
            });
        }

        this.setState({
            value: e.target.value,
            posts: posts,
            noSearch: false
        });
    }

    deleteHandler = () => {
        this.setState({
            value: '',
            posts: this.state.oldPosts,
            noSearch: true,
            notFound: false
        });
    }

    render() {

        const notFound = <p className={classes.NotFound}>По данному поисковому запросу не было найдено постов...</p>

        return (
            <div className={classNames(classes.News, 'container')}>
                <Search
                    loading={this.state.loading}
                    value={this.state.value}
                    onChange={this.searchHandler}
                    noSearch={this.state.noSearch}
                    deleteHandler={this.deleteHandler}
                />
                
                <NewsList
                    loading={this.state.loading}
                    posts={this.state.posts}
                />
                {this.state.notFound ? notFound : null}
            </div>
        )
    }
}

export default News;
