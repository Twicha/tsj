import React, { Component } from 'react';
import classes from './Auth.module.scss';
import classNames from 'classnames';
import axios from 'axios';
import {setToken} from '../../auth';
import { connect } from 'react-redux';
import {fetchAuth} from '../../store/actions/auth';

export class Auth extends Component {
    state = {
        submitted: false,
        error: false,
        email: '',
        password: ''
    }

    inputChangeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        });
    }

    authHandler = async (e) => {
        e.preventDefault();

        this.setState({
            error: false,
            submitted: true
        });

        

        const user = {
            email: this.state.email,
            password: this.state.password,
            returnSecureToken: true
        };

        const auth = () => {
            return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBcnTDWnFFuebP5mX3zaxTWnbnk9BL829w`, user)
        }
        
        try {
            await auth().then(res => {
                setToken(res);

                this.props.fetchAuth();
            });
        } catch (e) {
            console.log(e);
            this.setState({
                submitted: false,
                error: true
            });
        }
    }

    render() {
        const {error, submitted, email, password} = this.state;

        const errorMessage = <div className={classes.Error}>Неверные электронная почта или пароль...</div>;

        return (
            <div className={classNames(classes.Auth, "container")}>
                <form>
                    <h2>Авторизация</h2>
                    <input 
                        type="text" 
                        name="email" 
                        placeholder="Введите электронную почту..."
                        value={email}
                        onChange={this.inputChangeHandler}
                        disabled={submitted}
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Введите пароль..."
                        value={password}
                        onChange={this.inputChangeHandler}
                        disabled={submitted}
                    />
                    <button 
                        type="submit"
                        onClick={this.authHandler}
                        disabled={submitted}
                    >
                        Войти
                    </button>
                </form>
                {error ? errorMessage : null}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth.auth
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchAuth: () => dispatch(fetchAuth())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);