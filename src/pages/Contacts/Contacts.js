import React, { Component } from 'react';
import classes from './Contacts.module.scss';
import classNames from 'classnames';
import YandexMap from './YandexMap/YandexMap';
import ContactsList from './ContactsList/ContactsList';

export class Contacts extends Component {
    state = {
        mapMarkCoords: [54.678468, 20.471617],
        mapLoading: true,
        mapState: {
            zoom: document.documentElement.clientWidth > 480 ? 18 : 17,
            center: document.documentElement.clientWidth > 480 ? [54.678410, 20.469528] : [54.678468, 20.471617],
            controls: [],
        },
        zoomControlState: {
            size: 'small', 
            position: {
                top: 30,
                right: 30,
            }
        }
    }

    hideLoadText = () => {
        this.setState({
            mapLoading: false
        })
    }

    render() {
        const {mapState, zoomControlState, mapMarkCoords, mapLoading} = this.state;

        const mapLoadingText = mapLoading ? <p className={classes.MapLoadingText}>Карта ещё загружается...</p> : null;

        return (
            <React.Fragment>
                <div className={classNames(classes.Contacts, 'container')}>
                    <ContactsList />
                    {mapLoadingText}
                </div>
                <YandexMap
                    className={classes.Map} 
                    mapState={mapState}
                    zoomControlState={zoomControlState}
                    mapMarkCoords={mapMarkCoords}
                    hideLoadText={this.hideLoadText}
                />
            </React.Fragment>
        )
    }
}


export default Contacts;
