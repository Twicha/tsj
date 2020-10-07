import React, { Component, useEffect, useState } from 'react';
import classes from './Contacts.module.scss';
import classNames from 'classnames';
import YandexMap from './YandexMap/YandexMap';
import ContactsList from './ContactsList/ContactsList';
import {DOCUMENT_TITLE} from '../../variables';

const Contacts = () => {
    const [mapMarkCoords, setMapMarkCoords] = useState([54.678468, 20.471617]);
    const [mapLoading, setMapLoading] = useState(true);
    const [mapState, setMapState] = useState({
        zoom: document.documentElement.clientWidth > 480 ? 18 : 17,
        center: document.documentElement.clientWidth > 480 ? [54.678410, 20.469528] : [54.678468, 20.471617],
        controls: [],
    });
    const [zoomControlState, setZoomControlState] = useState({
        size: 'small', 
        position: {
            top: 30,
            right: 30,
        }
    });

    useEffect(() => {
        document.title = `${DOCUMENT_TITLE}Контакты`;
    }, []);

    const hideLoadText = () => {
        setMapLoading(false);
    }

    return (
        <React.Fragment>
            <div className={classNames(classes.Contacts, 'container')}>
                <ContactsList />
                {mapLoading && <p className={classes.MapLoadingText}>Карта ещё загружается...</p>}
            </div>
            <YandexMap
                className={classes.Map} 
                mapState={mapState}
                zoomControlState={zoomControlState}
                mapMarkCoords={mapMarkCoords}
                hideLoadText={hideLoadText}
            />
        </React.Fragment>
    )
}

export default Contacts;

