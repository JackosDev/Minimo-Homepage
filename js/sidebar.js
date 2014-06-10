/*
    sidebar.js
        Sidebar effects for a great user experience. Set correct variables
        to related inputs. Save variables when input changes.
    
    Requires:
        - main.js
        - mascot.js
        - theme.js
        
    <Jackos>: I think my code is a mess in general, but this file wins.

    Note: The javascript in this project is strictly used for the configuration
          bar or sidebar.
*/
 
function sidebarInit() {
    gSidebarStatus = 1;
    sidebarToggle();

    $(".sidebar-togglebutton")
    .hover(
        function() {
            $(this).css("opacity", "1");
        },
        function() {
            if (gSidebarStatus) 
                $(this).css("opacity", "1");
            else
                $(this).css("opacity", "0");
        }
    );
    
    $(".sidebar-togglebutton").click(function() {
        if (!gSidebarStatus) {
            $(this).css("left", "-15px");
            $(this).css("opacity", "1");
        } else {
            $(this).css("left", "-8px");
        }
        sidebarToggle();
    });
    
    $("#sidebar-wrapper").hover(function() {
        $("#sidebar").css("opacity", "1");
    }, function() {
        $("#sidebar").css("opacity", "0.5");
    });
    
    sbSettingsSet();
    sbSettingsChange();
}

function sidebarToggle() {
    if (!gSidebarStatus) {
        $("#sidebar").css("left", "0px");
        gSidebarStatus = 1;
    } else {
        $("#sidebar").css("left", "calc(-300px - 2px)");
        gSidebarStatus = 0;
    }
}

// sbSettingsSet: Set inputs with related values.
function sbSettingsSet() {
    // Custom Mascot
    $("#custom_mascot_url").attr("value", gMascot.url);
    $("#custom_mascot_pos").attr("value", gMascot.position);
    $("#custom_mascot_size").attr("value", gMascot.size);

    switch (gMascot.custom) {
    case 0:
        $("#custom_mascot").prop("checked", false);
        $("#custom_mascot_pos").attr("disabled", "disabled");
        $("#custom_mascot_url").attr("disabled", "disabled");
        $("#custom_mascot_size").attr("disabled", "disabled");
        mascotInit();
        break;
    case 1:
        $("#custom_mascot").prop("checked", true);
        $("#custom_mascot_pos").removeAttr("disabled");
        $("#custom_mascot_url").removeAttr("disabled");
        $("#custom_mascot_size").removeAttr("disabled");
        mascotInit();
        break;
    }
    
    // Custom Theme
    $("#custom_theme_url").attr("value", gTheme.url);
    if (gTheme.status == 2) {
        $("#custom_theme").prop("checked", true);
        $("#custom_theme_url").removeAttr("disabled");
        themeInit();
        
    } else {
        $("#custom_theme").prop("checked", false);
        $("#custom_theme_url").attr("disabled", "disabled");
        themeInit();
    }
}

// sbSettingsChange: What happens when you change an input of the sidebar. Part
// of sidebarInit, separated for my own sake.
function sbSettingsChange() {

    // Custom Mascot
    $("#custom_mascot").change(function() {
        if ($(this).is(":checked"))
            gMascot.custom = setStorage("mascot_custom", 1, NUMBER);
        else
            gMascot.custom = setStorage("mascot_custom", 0, NUMBER);
        sbSettingsSet();
    });
    
    $("#custom_mascot_url").change(function() {
        gMascot.url = setStorage("mascot_url", $(this).val(), STRING);
        sbSettingsSet();
    });    

    $("#custom_mascot_pos").change(function() {
        gMascot.position = setStorage("mascot_position", $(this).val(), STRING);
        sbSettingsSet();
    });    

    $("#custom_mascot_size").change(function() {
        gMascot.size = setStorage("mascot_size", $(this).val(), STRING);
        sbSettingsSet();
    });
    
    // Custom Theme
    $("#custom_theme").change(function() {
        if ($(this).is(":checked"))
            gTheme.status = setStorage("theme_status", 2, NUMBER);
        else
            gTheme.status = setStorage("theme_status", 0, NUMBER);
        sbSettingsSet();
    });

    $("#custom_theme_url").change(function() {
        gTheme.url = setStorage("theme_url", $(this).val(), STRING);
        sbSettingsSet();
    });
}