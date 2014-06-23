$(document).ready(function() {
    /* Do not edit here if you don't know what you're doing */
    if (mascotEnable) {
        $("#mascot").css("background-position", mascotPosition);

        if (mascotUrl == "")
            $("#mascot").css("background-image", "");
        else
            $("#mascot").css("background-image", "url(" + mascotUrl + ")");

    } else {
        $("#mascot").css("background-image", "none");
    }

    if (themeUrl == "")
        $("#theme").attr("href", "css/theme.css");
    else
        $("#theme").attr("href", themeUrl);
});