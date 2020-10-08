import React from "react";
import { useHistory } from "react-router";
import classes from "./SingleNews.module.scss";
import classNames from "classnames";
import { getPost } from "../../posts";
import { postedTime } from "../../functions";
import { DOCUMENT_TITLE } from "../../variables";

const SingleNews = (props) => {
    const history = useHistory();
    const [post, setPost] = React.useState(null);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        try {
            getPost(props.match.params.id).then((res) => {
                if (res) {
                    setPost(res);
                    setLoading(false);
                } else {
                    history.push("/404");
                }
            });
        } catch (error) {
            console.log(error);

            history.push("/404");
        }

        // почему он хочет в зависимостях иметь 'history' и 'props.match.params.id'??????
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    React.useEffect(() => {
        document.title = `${DOCUMENT_TITLE}${post && post.title}`;
    }, [post]);

    const loader = (
        <div
            className={classNames(
                "container",
                classes.SingleNews,
                classes.Loader
            )}
        >
            <h1 className={classNames(classes.SingleNews__Title)}>заглушка</h1>
            <div className={classNames(classes.SingleNews__Text)}>
                {Array(43)
                    .fill(0)
                    .map((_, index) => (
                        <p key={index}>заглушка</p>
                    ))}
            </div>
            <small className={classNames(classes.SingleNews__Posted)}>
                заглушка
            </small>
        </div>
    );

    const content = post && (
        <div className={classNames("container", classes.SingleNews)}>
            <h1 className={classNames(classes.SingleNews__Title)}>
                {post.title ? post.title : null}
            </h1>

            <div
                className={classNames("ql-editor", classes.SingleNews__Text)}
                dangerouslySetInnerHTML={{
                    __html: post.text ? post.text : null,
                }}
            ></div>

            <small className={classNames(classes.SingleNews__Posted)}>
                Запись опубликована&nbsp;
                {post.posted ? postedTime(post.posted) : null}
            </small>
        </div>
    );

    return <React.Fragment>{loading ? loader : content}</React.Fragment>;
};

export default SingleNews;
