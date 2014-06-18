Minimo
=======
A simple homepage/startpage alternative made with HTML + CSS. [[Live Demo](http://jackosdev.github.io/Minimo-Homepage/)]  
This project is under the [WTF Public License](http://www.wtfpl.net/).

**Important:** This page works with Firefox 29.0 or better. Other browsers may present problems.

Customization
-------------
### Files
| File                  | Info |
|-----------------------|------|
| `index.html`          | Used in the [live demo](http://jackosdev.github.io/Minimo-Homepage/). Includes configuration bar. |
| `home.html`           | [Example](http://jackosdev.github.io/Minimo-Homepage/home.html) used in the live demo. No configuration bar included. _Recommended for personal use_. |
| `css/theme.css`, `css/theme-dark.css` | Example themes. Use these as a base for your own. |
| `css/main.css`        | There's not much to edit here, mainly alignements. |
| `css/main-webkit.css` | For old browsers, a complement for `main.css`.  **Note:** I'm not updating this file anymore (unless requested). |
| `js/<file>.js`        | Javascript files for the configuration bar. Sorry for spaghetti code. | 

**Note**: I'm not going to explain the detailed use for the configuration bar.
The next part is only if you're using `home.html`, since you will need to edit
plain CSS and HTML. If you are using the configuration bar of `index.html` avoid
editing the HTML or CSS related to the options included, because they may misbehave
in weird ways I didn't contemplate when making the bar.


### Theme
To use your own theme (I'll suppose it's inside the `css` folder and the file
named `my_theme.css`), edit the next line:
```html
<link rel="stylesheet" type="text/css" href="css/my_theme.css" />
```


### Mascots
Edit the `#mascot` block inside `your_theme.css`
```css
#mascot {
    background-image: url("../images/mascots/mascot.png");  /* URL */
    background-size: auto 400px;                            /* Size */
    background-position: right bottom;                      /* Position */
}
```
The properties explain themselves.  
To disable the mascot, set `background-image: url("");` or comment the mascot block
(`<div id="mascot"></div>`) inside `home.html`.  

The mascot block must be before every other block (or just after the body tags
), or it may misbehave.


To Do
-----
* ~~Add support for old browsers **Done**. I think.~~ 
* ~~Add mascots?~~ **Done**.
* ~~Add idiot-proof and useless explanations because I don't know what to do with my life anymore? **Done**.~~
* ~~Rewrite main.css~~ **Done**.
* ~~Add configuration menu?~~ **Mostly done**.
* Rewrite configuration menu. Maybe.
* ?
