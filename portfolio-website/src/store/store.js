import React from "react";

const GlobalState = React.createContext({
    darkMode: false,
    changeTheme: () => {},
    format: undefined,
    formatMessage: undefined,
    modal: false,
    changeModalState: () => {}
});

export default GlobalState;