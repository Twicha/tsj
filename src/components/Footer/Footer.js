import React from 'react';
import classes from './Footer.module.scss';
import classNames from 'classnames';

const Footer = () => {
    const yearNow = (new Date()).getFullYear().toString();

    return (
        <div className={classes.WrapperFooter}>
            <footer className={classNames(classes.Footer, 'container')}>
                <small className={classes.Copyright}>© 2019-{yearNow} ТСЖ Книжное.</small>
                <div className={classes.Feedback}>
                    По вопросам сайта: 
                    <a href="mailto:test@mail.ru">test@mail.ru</a>
                </div>
            </footer>
        </div>
    )
}

export default Footer;
