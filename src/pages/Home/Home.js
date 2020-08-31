import React, {Component, useState, useEffect} from 'react';
import classes from './Home.module.scss';
import classNames from 'classnames';
import NewsCard from '../../components/UI/NewsList/NewsCard/NewsCard';
import {getPosts} from '../../posts';
import NewsList from '../../components/UI/NewsList/NewsList';
import NewsHeader from './News/NewsHeader/NewsHeader';

export class Home extends Component {
    state = {
        posts: [{},{},{},{},{},{},{},{},{},{}],
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

            const finalArr = arr.filter((_, i) => i < 10);
            
            this.setState({
                posts: finalArr,
                loading: false
            })
        });
    }

    render() {
        return (
            <div className={classNames("container", classes.Home)}>
                <div className={classes.News}>
                    <NewsHeader length={this.state.posts.length} />
                    <NewsList
                        loading={this.state.loading}
                        posts={this.state.posts} 
                    />
                </div>

            </div>
        )
    }
}

export default Home;
