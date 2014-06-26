$(document).ready(function() {
    /*
        Do not edit here if you don't know what you're doing
    */

    /* Header */
    if (pageTitle != "") {
        var headerBlock = document.getElementsByTagName("header")[0];
        headerBlock.getElementsByTagName("h1")[0].innerHTML = pageTitle;
    }

    /* Mascots */
    if (mascotEnable) {
        // Create mascot div
        var mascotBlock = document.createElement("div");
        mascotBlock.setAttribute("id", "mascot");
        document.body.appendChild(mascotBlock);

        $("#mascot").css("background-position", mascotPosition);
        $("#mascot").css("background-size", mascotSize);

        if (mascotUrl == "")
            $("#mascot").css("background-image", "");
        else
            $("#mascot").css("background-image", "url(" + mascotUrl + ")");
    }

    /* Theme */
    // Set theme
    if (themeUrl == "")
        $("#theme").attr("href", "css/theme.css");
    else 
        $("#theme").attr("href", themeUrl);
    
    // Change theme by time
    if (themeTime) {
        var time = new Date().getHours();

        if (time >= themeTime_DayHour && time < themeTime_NightHour)
            $("#theme").attr("href", themeTime_DayUrl);
        else
            $("#theme").attr("href", themeTime_NightUrl);
    }
    
    /* Navigation */
    if (navigationJs) {
        var navBlock = document.getElementById("navigation");
        
        for (i = 0; i < navList.length; ++i) {
            if (i == 0)
                var navListContainer = document.createElement("ul");
            else if (navList[i] == "---") {
                var navListContainer = document.createElement("ul");
                ++i;
            }
            
            if (!(i % 2)) {
                var navListItem = document.createElement("li");
                
                var navListItemContent = document.createElement("a");
                navListItemContent.href = navList[i + 1];
                navListItemContent.innerHTML = navList[i];
                navListItem.appendChild(navListItemContent);
                
                navListContainer.appendChild(navListItem);
            }

            navBlock.appendChild(navListContainer);
        }
    }
});

function changeTheme() {
    var currentTheme = $("#theme").attr("href");
    
    if (currentTheme == "css/theme.css")
        $("#theme").attr("href", "css/theme-dark.css");
    else if (currentTheme == "css/theme-dark.css")
        $("#theme").attr("href", "css/theme.css");
}