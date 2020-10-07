import React, { useState, useEffect } from "react";
import classes from "./Header.module.scss";
import classNames from "classnames";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import MobileMenuButton from "./MobileMenuButton/MobileMenuButton";
import { useSelector, useDispatch } from "react-redux";
import { fetchHideSctollTopBtn } from "../../store/actions/scrollTopBtn";
import { scrollTop } from "../../functions";

const Header = () => {
    const dispatch = useDispatch();
    const [mobileScreen, setMobileScreen] = useState(
        document.documentElement.clientWidth > 480 ? false : true
    );
    const [mobileMenu, setMobileMenu] = useState(false);
    const { isAuth, scrollTopBtnActive } = useSelector(
        ({ auth, scrollTopBtn }) => {
            return {
                isAuth: auth.isAuth,
                scrollTopBtnActive: scrollTopBtn.active,
            };
        }
    );

    const links = !isAuth
        ? [
              { to: "/", title: "Главная", exact: true },
              { to: "/news", title: "Новости", exact: false },
              { to: "/contacts", title: "Контакты", exact: false },
          ]
        : [
              { to: "/", title: "Главная", exact: true },
              { to: "/admin", title: "Админка", exact: false },
              { to: "/news", title: "Новости", exact: false },
              { to: "/contacts", title: "Контакты", exact: false },
          ];

    useEffect(() => {
        window.addEventListener("resize", switchMobileMenuHandler);

        return () => {
            window.removeEventListener("resize", switchMobileMenuHandler);
        };
    });

    const switchMobileMenuHandler = () => {
        if (document.documentElement.clientWidth > 480) {
            setMobileScreen(false);
            setMobileMenu(false);

            document.body.style.overflow = "";
        } else {
            setMobileScreen(true);

            document.body.style.overflow = "";
        }
    };

    const mobileMenuHandler = () => {
        if (mobileScreen) {
            if (!mobileMenu) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }

            setMobileMenu(!mobileMenu);
        }
    };

    const clickHandler = () => {
        scrollTop();

        if (mobileMenu) {
            mobileMenuHandler();
        }

        if (scrollTopBtnActive) {
            dispatch(fetchHideSctollTopBtn());
        }
    };

    return (
        <div className={classNames(classes.WrapperHeader)}>
            <header className={classNames(classes.Header, "container")}>
                <Logo onClick={clickHandler} />
                <Navigation
                    mobileMenu={mobileMenu}
                    onClick={clickHandler}
                    links={links}
                />
                {mobileScreen ? (
                    <MobileMenuButton
                        onClick={mobileMenuHandler}
                        mobileMenu={mobileMenu}
                    />
                ) : null}
            </header>
        </div>
    );
};

export default Header;
