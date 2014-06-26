Minimo
=======
A simple homepage/startpage alternative made with HTML + CSS. [[Live Demo](http://jackosdev.github.io/Minimo-Homepage/)]  

**Important:** This page should work without problems in Firefox 28.0, Chrome 29.0, Opera 17.0 and IE 11.0.

Customization
-------------
| File                  | Info |
|-----------------------|------|
| `index.html`          | Used in the [live demo](http://jackosdev.github.io/Minimo-Homepage/). |
| `home.html`           | [Example](http://jackosdev.github.io/Minimo-Homepage/home.html) used in the live demo. |
| `css/theme.css`, `css/theme-dark.css` | Example themes. Use these as a base for your own. |
| `css/main.css`        | There's not much to edit here, mainly alignements. |
| `css/main-webkit.css` | For old browsers, a complement for `main.css`.  |
| `js/settings.js`        | Settings. | 

Edit `settings.js` as you like: 
```javascript
// Mascots
var mascotEnable = false;
var mascotUrl = "images/mascots/mascot1.png";
var mascotPosition = "bottom left";

// Theme
var themeUrl = "css/theme.css";
```
Use `mascotPosition = ""` to use the position in `theme.css`. Same for `mascotUrl`.
To use your own mascot, set an URL.

To Do
-----
* Clean ToDo list. **Done**.
* Keep `main-webkit.css` updated.
* ?