import React from 'react';
import classes from './NewsCard.module.scss';
import classNames from 'classnames';
import { useSelector, useDispatch, connect } from 'react-redux';
import { fetchHideSctollTopBtn } from '../../../../store/actions/scrollTopBtn';
import { Link } from 'react-router-dom';
import { postedTime } from '../../../../functions';

const NewsCard = ({loading, title, posted, id, active, fetchHideSctollTopBtn}) => {
    const path = `/news/${id}`;

    const clickHandler = () => {
        if (active) {
            fetchHideSctollTopBtn();
        }
    }

    const item = () => {
        if (loading) {
            return (
                <li className={classNames(classes.NewsCard, classes.Loading)} title="Идёт загрузка...">
                    <a>заглушка</a>
                    <p>заглушка</p>
                </li>
            );
        } else {
            return(
                <li className={classes.NewsCard}>
                    <Link 
                        to={path} 
                        title={title}
                        onClick={clickHandler}
                    >
                        {title}
                    </Link>
                    <p>Запись опубликована {posted ? postedTime(posted) : null}</p>
                </li>
            );
        }
    }

    return (
        <React.Fragment>
            {item()}
        </React.Fragment>
    )
}

function mapStateToProps(state) {
    return {
        active: state.scrollTopBtn.active,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchHideSctollTopBtn: () => dispatch(fetchHideSctollTopBtn())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsCard);

