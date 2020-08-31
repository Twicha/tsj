import { HIDE_SCROLL_TOP_BTN, SCROLL_DOWN_NO_ACTIVE, SCROLL_DOWN_ACTIVE, SCROLL_UP_NO_ACTIVE, SCROLL_UP_ACTIVE, SCROLL_TOP } from "./actionsType";
import { twoStepScroller } from "../../functions";


export function fetchHideSctollTopBtn() {
    return {
        type: HIDE_SCROLL_TOP_BTN
    }
}

export function fetchScrollDownNoActive() {
    return {
        type: SCROLL_DOWN_NO_ACTIVE
    }
}

export function fetchScrollDownActive() {
    return {
        type: SCROLL_DOWN_ACTIVE
    }
}

export function fetchScrollUpNoActive() {
    return {
        type: SCROLL_UP_NO_ACTIVE
    }
}

export function fetchScrollUpActive() {
    return {
        type: SCROLL_UP_ACTIVE
    }
}

function scrollTop(visible, active, coords) {
    return {
        type: SCROLL_TOP,
        visible: visible,
        active: active,
        coords: coords,
    }
}

export function fetchScrollTop(visible, active, coords, stateCoords) {
    return dispatch => {
        if (window.pageYOffset > 15) {
            twoStepScroller(15, 0);

            dispatch(scrollTop(visible, active, coords));
        } else {
            twoStepScroller(stateCoords - 15, stateCoords);
        }
    }
}