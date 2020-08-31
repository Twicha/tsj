import React from 'react';
import Layout from './hoc/Layout/Layout';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import Contacts from './pages/Contacts/Contacts';
import SingleNews from './pages/SingleNews/SingleNews';
import Admin from './pages/Admin/Admin';
import Auth from './pages/Auth/Auth';
import { connect } from 'react-redux';
import CreateNews from './pages/CreateNews/CreateNews';
import EditNews from './pages/EditNews/EditNews';
import PrivateRoute from './helpers/PrivateRoute';

function App({auth}) {
    
    return (
        <BrowserRouter>
            <Switch>
                <Layout>
                    <Route path="/" exact component={Home} />
                    <Route path="/news" exact component={News} />
                    <Route path="/news/:id" component={SingleNews} />
                    <Route path="/contacts" component={Contacts} />
                    <Route path="/admin/auth">
                        {
                            auth 
                            ? <Redirect to="/admin" /> 
                            : <Auth />
                        }
                    </Route>
                    <PrivateRoute auth={auth} path="/admin" exact component={Admin} />
                    <PrivateRoute auth={auth} path="/admin/create-news" component={CreateNews} />
                    <PrivateRoute auth={auth} path="/admin/edit-news/:id" component={EditNews} />
                </Layout>
            </Switch>
        </BrowserRouter>
    );
}
function mapStateToProps(state) {
    return {
        auth: state.auth.auth
    }
}

export default connect(mapStateToProps)(App);