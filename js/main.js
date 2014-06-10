/*
    main.js
        Create or load global variables using localStorage.
    
    Note: The javascript in this project is strictly used for the configuration
          bar or sidebar.
*/

const NUMBER = 0;
const STRING = 1;

function init() {
    gMascot = {
        status: 0,      // 0 = hidden, 1 = displayed
        custom: 0,      // 0 = custom mascot disabled, 1 = enabled;
        url: 0,         // url to mascot (string)
        position: 0,    // css: background-position (string)
        size: 0         // css: background-size (string)
    };

    if (!getStorage("mascot_status", NUMBER))
        gMascot.status = setStorage("mascot_status", 0, NUMBER);
    else
        gMascot.status = getStorage("mascot_status", NUMBER);
    
    if (!getStorage("mascot_custom", NUMBER))
        gMascot.custom = setStorage("mascot_custom", 0, NUMBER);
    else
        gMascot.custom = getStorage("mascot_custom", NUMBER);
        
    if (!getStorage("mascot_url", STRING))
        gMascot.url = setStorage("mascot_url", "images/mascots/mascot3.png", STRING);
    else
        gMascot.url = getStorage("mascot_url", STRING);
    
    if (!getStorage("mascot_position", STRING))
        gMascot.position = setStorage("mascot_position", "bottom right", STRING);
    else
        gMascot.position = getStorage("mascot_position", STRING);
    
    if (!getStorage("mascot_size", STRING))
        gMascot.size = setStorage("mascot_size", "auto 400px", STRING);
    else
        gMascot.size = getStorage("mascot_size", STRING);
        
    gTheme = {
        status: 0,  // 0 = default (light), 1 = dark, 2 = custom
        url: 0      // custom theme url
    };
    
    if ($("#theme").attr("href") == "css/theme.css" || $("#theme").attr("href") == "css/theme-dark.css" ) {
        if (!getStorage("theme_status", NUMBER))
            gTheme.status = setStorage("theme_status", 0, NUMBER);
        else
            gTheme.status = getStorage("theme_status", NUMBER);
        
        if (!getStorage("theme_url", STRING))
            gTheme.url = setStorage("theme_url", "css/my_theme.css", STRING);
        else
            gTheme.url = getStorage("theme_url", STRING);
    } else {
        gTheme.status = setStorage("theme_status", 2, NUMBER);
        gTheme.url = setStorage("theme_url", $("#theme").attr("href"), STRING);
    }
}

function getStorage(name, type) {
    if (!type)  // types: 0 = number, 1 = string
        return Number(localStorage.getItem(name));
    else
        return localStorage.getItem(name);
}

function setStorage(name, value, type) {
    localStorage.setItem(name, value);

    if (!type)
        return getStorage(name, NUMBER);
    else
        return getStorage(name, STRING);
}

function cleanStorage() {
    localStorage.removeItem("mascot_status");
    localStorage.removeItem("mascot_custom");
    localStorage.removeItem("mascot_url");
    localStorage.removeItem("mascot_position");
    localStorage.removeItem("mascot_size");
    localStorage.removeItem("theme_status");
    localStorage.removeItem("theme_url");
}