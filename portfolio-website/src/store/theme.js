import React from "react";

const Theme = React.createContext({
    darkMode: false,
    changeTheme: () => {},
});

export default Theme;