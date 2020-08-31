import React, {useState} from 'react';
import classes from './Layout.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ScrollTopBtn from '../../components/ScrollTopBtn/ScrollTopBtn';

const Layout = ({children}) => {

    return (
        <div className={classes.Layout}>
            <ScrollTopBtn />
            <Header />
            <div className={classes.MainContent}>
                {children}
            </div>
            <Footer />
        </div>
    )
}

export default Layout;
