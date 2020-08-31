import React from 'react';
import classes from './MobileMenuButton.module.scss';
import classNames from 'classnames';

const MobileMenuButton = ({onClick, mobileMenu}) => {
    return (
        <div 
            className={classNames(classes.MobileMenuButton, mobileMenu ? classes.Active : null)} 
            onClick={onClick}
        >
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default MobileMenuButton;
