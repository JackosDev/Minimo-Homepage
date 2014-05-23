/*  Copyright © 2014 Jackos
    This work is free. You can redistribute it and/or modify it under the
    terms of the Do What The Fuck You Want To Public License, Version 2,
    as published by Sam Hocevar. See the COPYING file for more details. */


/* Note: This script is being used only on "example2.html", feel free to
   ignore it.  */

$(document).ready(function() {
    $("span[id|='search-google']").click(function() {
        setSearch("google");
        $("#search-input").focus();
    });

    $("span[id|='search-nyaa']").click(function() {
        setSearch("nyaa");
        $("#search-input").focus();
    });
    
    $("span[id|='search-duckduckgo']").click(function() {
        setSearch("duckduckgo");
        $("#search-input").focus();
    });
});

function setSearch(provider) {
    // I'm being lazy and didn't do my homework. Is there a thing like
    // switch/cases in js?
    if (provider == "google") {
        $("#search-form").attr({
            action: "https://google.com/search"
        });
        
        $("#search-input").attr({
            name: "q",
            placeholder: "Google Search"
        });
    } else if (provider == "nyaa") {
        $("#search-form").attr({
            action: "http://nyaa.se/"
        });
        
        $("#search-input").attr({
            name: "term",
            placeholder: "Nyaa Search"
        });
        
    } else if (provider == "duckduckgo") {
        $("#search-form").attr({
            action: "https://duckduckgo.com/"
        });
        
        $("#search-input").attr({
            name: "q",
            placeholder: "Duck Duck Go"
        });    
    }
}