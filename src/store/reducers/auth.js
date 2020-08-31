import { AUTH } from "../actions/actionsType";
import { isAuthenticated } from "../../auth";


const initialState = {
    auth: isAuthenticated()
}

export default function (state = initialState, action) {
    switch (action.type) {
        case AUTH:
            return {
                ...state,
                auth: isAuthenticated()
            }
        default:
            return state;
    }
}