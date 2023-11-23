import {
    TOGGLE_SIDEBAR,
} from './actions';

const reducer = (state, action) => {

    if (action.type === TOGGLE_SIDEBAR) {
        return {
            ...state,
            showSidebar: !state.showSidebar,
        };
    }
};

export default reducer;