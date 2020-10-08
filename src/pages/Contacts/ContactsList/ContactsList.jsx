import React from 'react';
import classNames from 'classnames';
import classes from './ContactsList.module.scss';
import ContactsListItem from './ContactsListItem/ContactsListItem';

const contacts = [
    {type: 'tel', href: '89999999999', preText: 'Телефон председателя', text: '8 (999) 999 99 99'},
    {type: 'tel', href: '89999999988', preText: 'Телефон заместителя председателя', text: '8 (999) 999 99 88'},
    {type: 'mail', href: 'info@knignoe.ru', preText: 'Наша электронная почта', text: 'info@knignoe.ru'},
    {type: 'address', href: 'https://yandex.ru/maps/-/CCQtVLG5DC', preText: 'Наш адрес', text: 'Россия, г. Калининград, ул. Павлика Морозова, 32'},
]

const ContactsList = () => {

    const renderList = () => {
        return contacts.map((item, i) => {
            return <ContactsListItem key={i} info={item} />
        })
    }
    
    return (
        <ul className={classNames(classes.ContactsList, 'bs-1')}>
            {renderList()}
        </ul>
    )
}

export default ContactsList;
