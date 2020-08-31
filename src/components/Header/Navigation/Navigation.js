import React from 'react';
import classes from './Navigation.module.scss';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


const Navigation = ({mobileMenu, onClick, auth}) => {

    const links = !auth 
    ? [
        {to: '/', title: 'Главная', exact: true},
        {to: '/news', title: 'Новости', exact: false},
        {to: '/contacts', title: 'Контакты', exact: false},
    ]
    : [
        {to: '/', title: 'Главная', exact: true},
        {to: '/admin', title: 'Админка', exact: false},
        {to: '/news', title: 'Новости', exact: false},
        {to: '/contacts', title: 'Контакты', exact: false}
    ];

    const renderLinks = (onClick) => {
        return links.map((link, index) => {
            return (
                <li 
                    key={index}
                    className={classNames(classes.NavigationList__Item)}
                >
                    <NavLink 
                        to={link.to}
                        exact={link.exact}
                        activeClassName={classes.Active}
                        onClick={onClick}
                        className={classNames(classes.NavigationList__Link)}
                    >
                        {link.title}
                    </NavLink>
                </li>
            )
        });
    }

    return (
        <nav className={classNames(classes.Navigation, mobileMenu ? classes.Active : null)}>
            <ul className={classNames(classes.NavigationList)}>
                {renderLinks(onClick)}
            </ul>
        </nav>
    )
}



function mapStateToProps(state) {
    return {
        auth: state.auth.auth
    }
}

export default connect(mapStateToProps)(Navigation);
