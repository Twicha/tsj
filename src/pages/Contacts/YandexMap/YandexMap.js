import React from 'react';
// import classes from './YandexMap.module.scss';
import classNames from 'classnames';
import { YMaps, Map, Placemark, ZoomControl } from "react-yandex-maps";

const YandexMap = ({mapState, mapMarkCoords, className, hideLoadText, zoomControlState}) => { 
    
    return (
        <YMaps>
            <Map 
                onLoad={hideLoadText}
                state={mapState}
                className={className}
                instanceRef={ref => { ref && ref.behaviors.disable('scrollZoom'); }}
            >
                <Placemark geometry={mapMarkCoords} />
                <ZoomControl options={zoomControlState} />
            </Map>
        </YMaps>
    )
}


export default YandexMap;
