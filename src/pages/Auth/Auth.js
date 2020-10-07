import React, { useState, useEffect } from 'react';
import classes from './Auth.module.scss';
import classNames from 'classnames';
import axios from 'axios';
import {setToken} from '../../auth';
import { useDispatch } from 'react-redux';
import {fetchAuth} from '../../store/actions/auth';
import { DOCUMENT_TITLE } from '../../variables';

const Auth = () => {
    const dispatch = useDispatch();
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    useEffect(() => {
        document.title = `${DOCUMENT_TITLE}Авторизация`;
    }, []);

    const inputChangeHandler = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;

        setForm({
            ...form,
            [inputName]: inputValue
        });
    }

    const authHandler = async (e) => {
        e.preventDefault();

        setSubmitted(true);
        setError(false);   

        const user = {
            ...form,
            returnSecureToken: true
        };

        const auth = () => {
            return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBcnTDWnFFuebP5mX3zaxTWnbnk9BL829w`, user)
        }
        
        try {
            await auth().then(res => {
                setToken(res);

                dispatch(fetchAuth());
            });
        } catch (e) {
            console.log(e);

            setSubmitted(false);
            setError(true);  
        }
    }

    return (
        <div className={classNames(classes.Auth, "container")}>
            <form>
                <h2>Авторизация</h2>
                <input 
                    type="text" 
                    name="email" 
                    placeholder="Введите электронную почту..."
                    value={form.email}
                    onChange={inputChangeHandler}
                    disabled={submitted}
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Введите пароль..."
                    value={form.password}
                    onChange={inputChangeHandler}
                    disabled={submitted}
                />
                <button 
                    type="submit"
                    onClick={authHandler}
                    disabled={submitted}
                >
                    Войти
                </button>
            </form>
            {error && <div className={classes.Error}>Неверные электронная почта или пароль...</div>}
        </div>
    )
}

export default Auth;