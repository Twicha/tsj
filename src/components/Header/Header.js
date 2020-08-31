import React, {useState, useEffect} from 'react';
import classes from './Header.module.scss';
import classNames from 'classnames';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import MobileMenuButton from './MobileMenuButton/MobileMenuButton';
import { connect } from 'react-redux';
import { fetchHideSctollTopBtn } from '../../store/actions/scrollTopBtn';
import { scrollTop } from '../../functions';

const Header = ({active, fetchHideSctollTopBtn}) => {
    const [mobile, setMobile] = useState(document.documentElement.clientWidth > 480 ? false : true);
    const [mobileMenu, setMobileMenu] = useState(false);


    useEffect(() => {
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        }
    });

    const checkMobile = () => {
        if (document.documentElement.clientWidth > 480) {
            setMobile(false);
            setMobileMenu(false);
        } else {
            setMobile(true);
        }
    };

    const mobileMenuHandler = () => {
        if (mobile) {
            if (!mobileMenu) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }

            setMobileMenu(!mobileMenu);
        }
    }

    const clickHandler = () => {
        scrollTop();

        if (mobileMenu) {
            mobileMenuHandler();
        }
        
        if (active) {
            fetchHideSctollTopBtn();
        }
    }
    
    return (
        <div className={classNames(classes.WrapperHeader)}>
            <header className={classNames(classes.Header, 'container')}>
                <Logo mobileMenu={mobileMenu} onClick={clickHandler} />
                <Navigation mobileMenu={mobileMenu} onClick={clickHandler} />
                {mobile ? <MobileMenuButton onClick={mobileMenuHandler} mobileMenu={mobileMenu} /> : null}
                
            </header>
            
        </div>
    )
}

function mapStateToProps(state) {
    return {
        active: state.scrollTopBtn.active,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchHideSctollTopBtn: () => dispatch(fetchHideSctollTopBtn())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

