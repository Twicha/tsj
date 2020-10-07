import { AUTH } from "../actions/actionsType";
import { isAuthenticated } from "../../auth";


const initialState = {
    isAuth: isAuthenticated()
}

export default function (state = initialState, action) {
    switch (action.type) {
        case AUTH:
            return {
                ...state,
                isAuth: isAuthenticated()
            }
        default:
            return state;
    }
}