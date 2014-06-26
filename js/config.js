//
//  User configuration
//

/* Header */
// If left blank, it'll use the text in the html
var pageTitle = "Homepage";


/* Theme */
var themeUrl = "css/theme.css";

// Change theme by time. Enabling this overrides themeUrl.
var themeTime = true;

// Times to change theme (format: 24 hours);
var themeTime_DayHour   = 8;
var themeTime_NightHour = 20;

// Themes URL
var themeTime_DayUrl   = "css/theme.css";
var themeTime_NightUrl = "css/theme-dark.css";


/* Mascot */
var mascotEnable = false;

// Leave blank if you want to use the properties specified in your css file
var mascotUrl      = "images/mascots/mascot1.png";
var mascotPosition = "bottom left";
var mascotSize     = "auto 400px";


/* Navigation */
// true: use menu generated with navList, false: use html
var navigationJs = true;

// Ignored if navigationJs is false. format: "Text", "URL"
// Use "---", "---" to separate columns
var navList = [
    "4chan",            "http://4chan.org/",
    "Anime & Manga",    "http://boards.4chan.org/a/catalog",
    "Technology",       "http://boards.4chan.org/g/catalog",
    "Retro Games",      "http://boards.4chan.org/vr/catalog",

    "---",  "---",
    
    "Anime",        "",
    "Nyaa",         "http://nyaa.se",
    "Sankaku",      "http://chan.sankakucomplex.com",
    "Danbooru" ,    "http://danbooru.donmai.us",
    
    "---", "---",
    
    "Resources",    "",
    "/g/wiki",      "http://wiki.installgentoo.com",
    "GitHub",       "http://github.com/JackosDev/Minimo-Homepage"
];