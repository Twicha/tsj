import React from 'react';
import classes from './PageNotFound.module.scss';
import classNames from 'classnames';
import ruinDt from './ruin-dt.jpg';
import ruinMb from './ruin-mb.jpg';


const PageNotFound = () => {
    const [background, setBackground] = React.useState({
        backgroundImage: `url(${document.documentElement.clientWidth > 480 ? ruinDt : ruinMb})`
    });

    const switchBg = () => {
        console.log(11);
        setBackground({
            backgroundImage: `url(${document.documentElement.clientWidth > 480 ? ruinDt : ruinMb})`
        });
    }

    React.useEffect(() => {
        window.addEventListener('resize', switchBg);

        return () => {
            window.removeEventListener('resize', switchBg);
        }
    }, []);

    return (
        <div className={classes.PageNotFound} style={background}>
            <p className="container">
                <span>404</span>
                <span>К сожалению данной страницы не существует...</span>
            </p>
        </div>
    )
}

export default PageNotFound;
