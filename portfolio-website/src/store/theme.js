import React from "react";

const Theme = React.createContext({
    darkMode: false,
    changeTheme: () => {},
    format: undefined,
    formatMessage: undefined,
    modal: false,
    changeModalState: () => {}
});

export default Theme;