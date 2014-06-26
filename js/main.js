$(document).ready(function() {
    /*
        Do not edit here if you don't know what you're doing
    */

    /* Mascots */
    if (mascotEnable) {
        $("#mascot").css("background-position", mascotPosition);

        if (mascotUrl == "")
            $("#mascot").css("background-image", "");
        else
            $("#mascot").css("background-image", "url(" + mascotUrl + ")");

    } else {
        $("#mascot").css("background-image", "none");
    }

    /* Theme */
    // Set theme
    if (themeUrl == "")
        $("#theme").attr("href", "css/theme.css");
    else 
        $("#theme").attr("href", themeUrl);
    
    // Change theme by time
    if (themeTime) {
        var time = new Date;
        var timeHours = time.getHours();

        if (timeHours >= themeTime_DayHour && timeHours < themeTime_NightHour)
            $("#theme").attr("href", themeTime_DayUrl);
        else
            $("#theme").attr("href", themeTime_NightUrl);
    }
});

function changeTheme() {
    var currentTheme = $("#theme").attr("href");
    
    if (currentTheme == "css/theme.css")
        $("#theme").attr("href", "css/theme-dark.css");
    else if (currentTheme == "css/theme-dark.css")
        $("#theme").attr("href", "css/theme.css");
}