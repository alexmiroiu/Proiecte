import React from "react";

const GlobalState = React.createContext({
    darkMode: false,
    changeTheme: () => {},
    format: undefined,
    formatMessage: undefined,
    changeProjectModalState: () => {},
    changeResumeModalState: () => {},
    currentLanguage: 'ro',
    changeLanguage: () => {}
});

export default GlobalState;