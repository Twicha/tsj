import axios from 'axios';

export const getPosts = async () => {
    const res = await fetch(`https://new-tsj.firebaseio.com/news.json`);

    return res.json();
}

export const getPost = async (id) => {
    const res = await fetch(`https://new-tsj.firebaseio.com/news/${id}.json`);

    return res.json();
}

export const createPost = (post) => {
    return axios.post(`https://new-tsj.firebaseio.com/news.json`, post);
}

export const editPost = (id, post) => {
    return axios.patch(`https://new-tsj.firebaseio.com/news/${id}.json`, post);
}

export const deletePost = (id) => {
    return axios.delete(`https://new-tsj.firebaseio.com/news/${id}.json`);
}

