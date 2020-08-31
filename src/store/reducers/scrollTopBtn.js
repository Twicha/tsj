import { HIDE_SCROLL_TOP_BTN, SCROLL_DOWN_NO_ACTIVE, SCROLL_DOWN_ACTIVE, SCROLL_UP_NO_ACTIVE, SCROLL_UP_ACTIVE, SCROLL_TOP } from "../actions/actionsType";


const initialState = {
    visible: false,
    coords: null,
    active: false,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case HIDE_SCROLL_TOP_BTN:
            return {
                ...state,
                visible: false,
                coords: null,
                active: false
            }
        case SCROLL_DOWN_NO_ACTIVE:
            return {
                ...state,
                visible: true
            }
        case SCROLL_DOWN_ACTIVE:
            return {
                ...state,
                visible: true,
                active: false
            }
        case SCROLL_UP_NO_ACTIVE:
            return {
                ...state,
                visible: false
            }
        case SCROLL_UP_ACTIVE:
            return {
                ...state,
                visible: true
            }
        case SCROLL_TOP:
            return {
                ...state,
                visible: action.visible,
                active: action.active,
                coords: action.coords
            }
        default:
            return state;
    }
}