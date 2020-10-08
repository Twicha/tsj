import React from "react";
import classes from "./Contacts.module.scss";
import classNames from "classnames";
import YandexMap from "./YandexMap/YandexMap";
import ContactsList from "./ContactsList/ContactsList";
import { DOCUMENT_TITLE } from "../../variables";

const mapMarkCoords = [54.678468, 20.471617];
const mapState = {
    zoom: document.documentElement.clientWidth > 480 ? 18 : 17,
    center:
        document.documentElement.clientWidth > 480
            ? [54.67841, 20.469528]
            : [54.678468, 20.471617],
    controls: [],
};
const zoomControlState = {
    size: "small",
    position: {
        top: 30,
        right: 30,
    },
};

const Contacts = () => {
    const [mapLoading, setMapLoading] = React.useState(true);

    React.useEffect(() => {
        document.title = `${DOCUMENT_TITLE}Контакты`;
    }, []);

    const hideLoadText = () => {
        setMapLoading(false);
    };

    return (
        <React.Fragment>
            <div className={classNames(classes.Contacts, "container")}>
                <ContactsList />
                {mapLoading && (
                    <p className={classes.MapLoadingText}>
                        Карта ещё загружается...
                    </p>
                )}
            </div>
            <YandexMap
                className={classes.Map}
                mapState={mapState}
                zoomControlState={zoomControlState}
                mapMarkCoords={mapMarkCoords}
                hideLoadText={hideLoadText}
            />
        </React.Fragment>
    );
};

export default Contacts;
