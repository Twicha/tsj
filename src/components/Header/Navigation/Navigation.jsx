import React from 'react';
import classes from './Navigation.module.scss';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';


const Navigation = React.memo(({mobileMenu, onClick, links}) => {

    return (
        <nav className={classNames(classes.Navigation, mobileMenu ? classes.Active : null)}>
            <ul className={classNames(classes.NavigationList)}>
                {links && links.map((link, index) => (
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
                ))}
            </ul>
        </nav>
    )
});

export default Navigation;
