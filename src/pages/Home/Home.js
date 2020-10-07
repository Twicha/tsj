import React from "react";
import classes from "./Home.module.scss";
import classNames from "classnames";
import { getPosts } from "../../posts";
import NewsList from "../../components/UI/NewsList/NewsList";
import NewsHeader from "./News/NewsHeader/NewsHeader";
import { DOCUMENT_TITLE } from "../../variables";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
    const dispatch = useDispatch();
    const { scrollTopBtnActive } = useSelector(({ scrollTopBtn }) => {
        return {
            scrollTopBtnActive: scrollTopBtn.active,
        };
    });

    const [posts, setPosts] = React.useState(Array(10).fill({}));
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        document.title = `${DOCUMENT_TITLE}Главная`;

        getPosts().then((res) => {
            const arr = [];

            Object.keys(res).forEach((key, index) => {
                res[key].postId = key;
                arr.push(res[key]);
            });

            arr.reverse();

            const finalArr = arr.filter((_, i) => i < 10);

            setPosts(finalArr);
            setLoading(false);
        });
    }, []);

    return (
        <div className={classNames("container", classes.Home)}>
            <div className={classes.News}>
                <NewsHeader
                    dispatch={dispatch}
                    scrollTopBtnActive={scrollTopBtnActive}
                    length={posts.length}
                />
                <NewsList loading={loading} posts={posts} />
            </div>
        </div>
    );
};

export default Home;
