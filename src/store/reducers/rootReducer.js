import {combineReducers} from 'redux';
import scrollTopBtnReducer from './scrollTopBtn';
import authReducer from './auth';


export default combineReducers({
    scrollTopBtn: scrollTopBtnReducer,
    auth: authReducer,
});