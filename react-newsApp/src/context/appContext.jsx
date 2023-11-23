import React, { useReducer, useContext, useState } from 'react';

import reducer from './reducer';

import {
    TOGGLE_SIDEBAR,
} from './actions';

const initialState = {
    showSidebar: false,
    user: null,
    token: null,
    setUser: () => { },
    setToken: () => { }
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

    const setToken = (token) => {
        _setToken(token)
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const toggleSidebar = () => {
        dispatch({ type: TOGGLE_SIDEBAR });
    };

    return (
        <AppContext.Provider
            value={{
                ...state,
                toggleSidebar,
                user,
                token,
                setUser,
                setToken
            }}
        >
            {children}
        </AppContext.Provider>
    );

};

const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };