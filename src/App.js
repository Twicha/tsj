import React from "react";
import classes from './App.module.scss';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import Contacts from "./pages/Contacts/Contacts";
import SingleNews from "./pages/SingleNews/SingleNews";
import Admin from "./pages/Admin/Admin";
import Auth from "./pages/Auth/Auth";
import { useSelector } from "react-redux";
import CreateNews from "./pages/CreateNews/CreateNews";
import EditNews from "./pages/EditNews/EditNews";
import PrivateRoute from "./helpers/PrivateRoute";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
    const { isAuth } = useSelector(({ auth }) => {
        return {
            isAuth: auth.isAuth,
        };
    });

    return (
        <BrowserRouter>
            <div className={classes.Layout}>
                <Header />
                <div className={classes.MainContent}>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/news" exact component={News} />
                        <Route path="/news/:id" component={SingleNews} />
                        <Route path="/contacts" component={Contacts} />
                        <Route path="/404" component={PageNotFound} />
                        <Route path="/admin/auth">
                            {isAuth ? <Redirect to="/admin" /> : <Auth />}
                        </Route>
                        <PrivateRoute
                            isAuth={isAuth}
                            path="/admin"
                            exact
                            component={Admin}
                        />
                        <PrivateRoute
                            isAuth={isAuth}
                            path="/admin/create-news"
                            component={CreateNews}
                        />
                        <PrivateRoute
                            isAuth={isAuth}
                            path="/admin/edit-news/:id"
                            component={EditNews}
                        />
                        <Route path="*" exact={true} component={PageNotFound} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
