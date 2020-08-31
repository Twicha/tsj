import React from 'react';
import classes from './ContactsListItem.module.scss';
import classNames from 'classnames';

const ContactsListItem = ({info}) => {

    const item = () => {
        if (info.type === 'tel') {
            const href = `tel:${info.href}`
            return (
                <li className={classes.ContactsListItem}>
                    {`${info.preText}: `}
                    <a 
                        href={href}
                    >
                        {info.text}
                    </a>
                </li>
            );
        } else if (info.type === 'mail') {
            const href = `mailto:${info.href}`
            return (
                <li className={classes.ContactsListItem}>
                    {`${info.preText}: `}
                    <a 
                        href={href}
                    >
                        {info.text}
                    </a>
                </li>
            );
        } else if (info.type === 'address') {
            return (
                <li className={classes.ContactsListItem}>
                    {`${info.preText}: `}
                    <a 
                        href={info.href}
                        target="_blank"
                        rel="nofollow"
                    >
                        {info.text}
                    </a>
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

export default ContactsListItem;
