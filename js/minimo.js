$(document).ready(function() {

var minimoDebug = true;

var minimoLogId = Object.freeze({
    NONE: 0,
    ERROR: 1,
    WARNING: 2
});

function MinimoLog(logid, string) {
    if (minimoDebug) {
        switch(logid) {
            case minimoLogId.NONE:
                var label = "";
                break;
            case minimoLogId.ERROR:
                var label = "[ERROR] ";
                break;
            case minimoLogId.WARNING:
                var label = "[WARNING] ";
                break;
            default:
                var label = "";
                break;
        }

        console.log("Minimo> " + label + string);
    }
}

// Stolen from jQuery API Documentation, jQuery.getScript() entry
jQuery.MinimoGetScript = function(url, options) {
    options = $.extend(options || {}, {
        dataType: "script",
        cache: true,
        url: url,
        async: false
    });

    return jQuery.ajax( options );
};

$.MinimoGetScript("js/minimo.config.js")
    .done(function() {
        MinimoLog(minimoLogId.NONE, "Configuration loaded.");
    })
    .fail(function(jqxHR, status, error) {
        MinimoLog(minimoLogId.ERROR, "Error loading configuration -> " + error)
        MinimoLog(minimoLogId.WARNING, "minimo.js functions disabled.")

        minimoEnableJs = false;
    })
;

// Main
function MinimoMain() {
    if (minimoEnableJs) {
        minimoBlock = $("#js-block");

        minimoBlock.empty();

        var list_size = minimoLinks.length;

        var i, j; // i = list elements; j = categories
        for (i = 0, j = 0; i < list_size; i++) {
            if (i == 0) {
                j++;
                minimoBlock.append("<ul id='list-id-" + j + "'></ul>");
            }

            if ((i % 2) == 0) {
                if (minimoLinks[i] == "---") {
                    j++;
                    i += 2;

                    minimoBlock.append("<ul id='list-id-" + j + "'></ul>");
                }

                var html_list = $("#list-id-" + j);
                html_list.append("<li><a href='" + minimoLinks[i + 1] + "'>" + minimoLinks[i] + "</a></li>");
            }
        }
    }
}

MinimoMain();

});
