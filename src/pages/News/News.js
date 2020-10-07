import React, { Component, useEffect, useState } from 'react';
import classes from './News.module.scss';
import classNames from 'classnames';
import { getPosts } from '../../posts';
import NewsList from '../../components/UI/NewsList/NewsList';
import Search from './Search/Search';
import {DOCUMENT_TITLE} from '../../variables';

const News = () => {
    const [value, setValue] = useState('');
    const [posts, setPosts] = useState([{},{},{},{},{},{},{},{},{},{}]);
    const [oldPosts, setOldPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState(false);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        document.title = `${DOCUMENT_TITLE}Новости`;
    }, []);

    useEffect(() => {
        getPosts().then(res => {
            const arr = [];
            console.log(1);

            Object.keys(res).forEach((key, index) => {
                res[key].postId = key;
                arr.push(res[key]);
            })
    
            arr.reverse();

            setPosts(arr);
            setOldPosts(arr);
            setLoading(false);
        });
    }, []);

    const searchHandler = (e) => {
        if(!e.target.value.trim()) {
            deleteHandler();

            return;
        }

        let posts = [];

        posts = [...oldPosts.filter(post => post.title.toLowerCase().includes(e.target.value.toLowerCase()))];

        if (!posts.length) {
            setNotFound(true);
        } else {
            setNotFound(false);
        }

        setValue(e.target.value);
        setPosts(posts);
        setSearch(true);
    }

    const deleteHandler = () => {
        setValue('');
        setPosts(oldPosts);
        setSearch(false);
        setNotFound(false);
    }

    return (
        <div className={classNames(classes.News, 'container')}>
            <Search
                loading={loading}
                value={value}
                onChange={searchHandler}
                search={search}
                deleteHandler={deleteHandler}
            />
            
            <NewsList
                loading={loading}
                posts={posts}
            />
            {notFound && <p className={classes.NotFound}>По данному поисковому запросу не было найдено постов...</p>}
        </div>
    );
}

export default News;

