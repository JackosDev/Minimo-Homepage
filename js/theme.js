/*
    theme.js
        Functions related to mascots and themes (lol, so descriptive).
        
    Requires:
        - main.js

    Note: The javascript in this project is strictly used for the configuration
          bar or sidebar.
*/


/* Mascots */ 
function mascotInit() {
    if (gMascot.status)
        mascotShow("none");
    else
        mascotHide("none");
}

function mascotSet() {
    if (gMascot.custom) {
        $("#mascot").css({
            "background-image": "url(" + gMascot.url + ")",
            "background-position": gMascot.position,
            "background-size": gMascot.size
        });
    } else {
        $("#mascot").css({
            "background-image": "",
            "background-position": "",
            "background-size": ""
        });
    }
}

function mascotShow(effect) {
    mascotSet();

    if (effect == "none")
        $("#mascot").show();
    else
        $("#mascot").fadeIn("250");

    gMascot.status = setStorage("mascot_status", 1, NUMBER);
}

function mascotHide(effect) {
    mascotSet();

    if (effect == "none")
        $("#mascot").hide();
    else
        $("#mascot").fadeOut("250");

    gMascot.status = setStorage("mascot_status", 0, NUMBER);
}

function mascotToggle() {
    if (!gMascot.status)
        mascotShow();
    else
        mascotHide();
}


/* Themes */
function themeInit() {
    switch(gTheme.status) {
        case 0:
            $("#theme").attr("href", "css/theme.css");
            break;
        case 1:
            $("#theme").attr("href", "css/theme-dark.css");
            break;
        case 2:
            $("#theme").attr("href", gTheme.url);
            break;

    }
}

function themeToggle() {
    // Custom themes can't toggle, lol
    if (gTheme.status != 2) {
        if (!gTheme.status) {
            gTheme.status = setStorage("theme_status", 1, NUMBER);
            $("#theme").attr("href", "css/theme-dark.css");
        } else {
            gTheme.status = setStorage("theme_status", 0, NUMBER);
            $("#theme").attr("href", "css/theme.css");
        }
    }

}