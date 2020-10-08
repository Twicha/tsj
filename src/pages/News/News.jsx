import React from 'react';
import classes from './News.module.scss';
import classNames from 'classnames';
import { getPosts } from '../../posts';
import {NewsList, Search} from '../../components/UI';
import {DOCUMENT_TITLE} from '../../variables';

const News = () => {
    const [value, setValue] = React.useState('');
    const [posts, setPosts] = React.useState(Array(10).fill({}));
    const [oldPosts, setOldPosts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [search, setSearch] = React.useState(false);
    const [notFound, setNotFound] = React.useState(false);

    React.useEffect(() => {
        document.title = `${DOCUMENT_TITLE}Новости`;

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

