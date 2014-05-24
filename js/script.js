/*  Copyright © 2014 Jackos
    This work is free. You can redistribute it and/or modify it under the
    terms of the Do What The Fuck You Want To Public License, Version 2,
    as published by Sam Hocevar. See the COPYING file for more details. */

$(document).ready(function() {
    $("span[id|='search-google']").click(function() {
        setSearch("google");
    });

    $("span[id|='search-nyaa']").click(function() {
        setSearch("nyaa");
    });
    
    $("span[id|='search-duckduckgo']").click(function() {
        setSearch("duckduckgo");
    });
});

function setSearch(provider) {
    switch(provider) {
        case "google":
            $("#search-form").attr("action", "https://google.com/search");
            $("#search-input").attr({
                name: "q",
                placeholder: "Google Search"
            });
            break;
        case "nyaa":
            $("#search-form").attr("action", "http://nyaa.se/");
            $("#search-input").attr({
                name: "term",
                placeholder: "Nyaa Search"
            });
            break;
        case "duckduckgo":
            $("#search-form").attr("action", "https://duckduckgo.com/");
            $("#search-input").attr({
                name: "q",
                placeholder: "Duck Duck Go"
            });
            break;
    }
    
    $("#search-input").focus();
}