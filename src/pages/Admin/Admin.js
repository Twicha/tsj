import React, { Component, useState } from 'react';
import classes from './Admin.module.scss';
import classNames from 'classnames';
import {logout} from '../../auth';
import { connect } from 'react-redux';
import {fetchAuth} from '../../store/actions/auth';
import { Link } from 'react-router-dom';
import NewsList from './NewsList/NewsList';

const Admin = (props) => {
    
    const adminLogout = () => {
        logout();

        props.fetchAuth();
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

function mapStateToProps(state) {
    return {
        auth: state.auth.auth
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchAuth: () => dispatch(fetchAuth())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
