Minimo
=======
A simple homepage/startpage alternative made with HTML + CSS + jQuery. [[Live Demo](http://jackosdev.github.io/Minimo-Homepage/)]  
This project is under the [WTF Public License](http://www.wtfpl.net/).

**Important:** This page works with Firefox 29.0 or better. Other browsers may present problems.

Customization
-------------
### Files
| File                  | Info |
|-----------------------|------|
| `index.html`          | For the [live demo](http://jackosdev.github.io/Minimo-Homepage/). Uses jQuery. |
| `home.html`           | Edit as you please, if you follow the base you won't have any problems. If you're going to add something, do it **inside** the `main` tags (ie. `<main>your things here</main>`), unless you want it to be ugly and unaligned. Doesn't use jQuery. |
| `css/theme.css`, `css/theme-dark.css` | Edit as you please. |
| `css/main.css`        | There's not much to edit here, mainly alignements. |
| `css/main-webkit.css` | Rules for old browsers, a complement for `main.css`. Ignore it if you have the latest version of your browser. **Note:** I'm not going to update this file anymore, it's a pain in the ass. ~~Unless requested.~~ |
| `js/<file>.js`        | Javascript files, they may be a mess (I'm sorry for that). Used for the sidebar and configs. | 


### Configuration Menu
Is on the top left of the page, the button is only visible on mouse hover.  
There you can edit some things without the need to create or edit a .CSS file:
- Toggle betwen light and dark theme
- Hide/Show mascot
- Use custom mascot: URL, position, size
- Use custom theme*: URL  
*Note: If you edited the HTML to use a custom theme, it will be forced to it in the sidebar. If you wanna go back to the original theme, set it to `theme.css` or `theme-dark.css`.


### Mascots
You have two options:  
1. Use the configuration menu (enable checkbox and set URL, position and size; _highly recommended_).  
2. Edit `theme.css` or `theme-dark.css` (_or both, or create your own and use that one_):
```css
#mascot {
    (...)
    background-image: url("../images/mascots/mascot.png");
    (...)
}
```
Where `mascot.png` is _your mascot file in .PNG_... yeah. Also, put it in the _mascots_ folder which is inside the _images_ folder.  
Edit `background-position` and `background-size` for your needs. Don't ask me how if you don't know (you _should_ know in the first place), ask Google.

### Themes
You have two options:  
1. Use the configuration menu (enable checkbox and set URL; _highly recommended_).  
2. Edit the HTML file:
```html
<link rel="stylesheet" type="text/css" href="css/theme.css" id="theme" />
```

`theme.css` is _your theme with the .CSS extension_ in the `css` folder. (ie. if you have a file named `theme-dark.css` it should like like `href="css/theme-dark.css"`)  
*Note: If you use a file named other than `theme.css` or `theme-dark.css` it will be forced in the configuration menu.


To Do
------
* ~~Add support for old browsers **Done**. I think.~~ 
* ~~Add mascots?~~ **Done**.
* ~~Add idiot-proof and useless explanations because I don't know what to do with my life anymore? **Done**.~~
* ~~Rewrite main.css~~ **Done**.
* ~~Add configuration menu?~~ **Mostly done**. 
* ???


Disclaimer
----------
I do not own any of the images included in this project, I found them in a Google Images search.  
~~_I'm innocent, I swear._~~