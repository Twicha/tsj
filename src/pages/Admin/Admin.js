import React, { useEffect } from 'react';
import classes from './Admin.module.scss';
import classNames from 'classnames';
import {logout} from '../../auth';
import { connect } from 'react-redux';
import {fetchAuth} from '../../store/actions/auth';
import { Link } from 'react-router-dom';
import NewsList from './NewsList/NewsList';
import { DOCUMENT_TITLE } from '../../variables';

const Admin = ({fetchAuth}) => {

    useEffect(() => {
        document.title = `${DOCUMENT_TITLE}Админка`;
    }, []);
    
    const adminLogout = () => {
        logout();

        fetchAuth();
    }
        
    return (
        <div className={classNames('container', classes.Admin)}>
            <div className={classNames(classes.AdminControls)}>
                <Link to="/admin/create-news" className={classNames('btn', classes.AdminControls__CreateNews)}>Создать новую новость</Link>
                <button onClick={adminLogout} className={classNames('btn', classes.AdminControls__LogOut)}>
                    Выйти из административной панели
                </button>
            </div>
            <NewsList />
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        fetchAuth: () => dispatch(fetchAuth())
    }
}

export default connect(null, mapDispatchToProps)(Admin);
