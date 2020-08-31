import React from 'react';
import classes from './ToAllNews.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch, connect } from 'react-redux';
import { fetchHideSctollTopBtn } from '../../../../../store/actions/scrollTopBtn';
import { scrollTop } from '../../../../../functions';

const ToAllNews = ({active, fetchHideSctollTopBtn}) => {

    const clickHandler = () => {
        scrollTop();

        if (active) {
            fetchHideSctollTopBtn();
        }
    }

    return (
        <Link 
            className={classes.ToAllNews} 
            to="/news"
            onClick={clickHandler}
        >
            все новости
        </Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(ToAllNews);
