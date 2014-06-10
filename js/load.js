/*
    load.js
        Initialize everything (variables, mascot, theme, sidebar).
    
    Requires (for obvious reasons):
        - main.js
        - mascot.js
        - theme.js
        - sidebar.js
    
    Note: The javascript in this project is strictly used for the configuration
          bar or sidebar.
*/

$(document).ready(function() {
    init();                 // This *must* be first
    mascotInit();
    themeInit();
    sidebarInit();          // This *must* be in the end
});