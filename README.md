Minimo
=======
A simple homepage alternative made with HTML + CSS. [[Live Demo](http://jackosdev.github.io/Minimo-Homepage/)]  
This project is under the [WTF Public License](http://www.wtfpl.net/).

Customization
-------------

| File                  | Info |
|-----------------------|------|
| `index.html`          | For the [live demo](http://jackosdev.github.io/Minimo-Homepage/). |
| `home.html`           | Edit as you please, if you follow the base you won't have any problems. If you're going to add something, do it **inside** the `main` tags (ie. `<main>your things here</main>`), unless you want it to be out of the main block. |
| `css/theme.css`, `css/theme-dark.css` | Edit as you please. |
| `css/main.css`        | Be careful with this one. Feel free to edit the `width` on `main {...}` if you don't know what you're doing. |
| `css/main-webkit.css` | Rules for old browsers, a complement to `main.css`. If you have the latest version of your browser or you didn't change any flex rules on `main.css`, ignore it. |

### Mascots
To use your mascot, edit on `theme.css` or `theme-dark.css` (_or both, or create your own and use that one_):
```css
html {
    background-color: #eaeaea;
    background-image: url("../img/mascot.png");
    background-position: left bottom;
    background-size: auto 400px;
}
```
Where `mascot.png` is _your mascot file in .PNG_... yeah. Also, put it in the img folder.  
Edit `background-position` and `background-size` for your needs. Don't ask me how if you don't know (you _should_ know in the first place), ask Google.

### Themes
To change theme, edit:
```html
<link rel="stylesheet" type="text/css" href="css/theme.css" />
```
`theme.css` is _your theme with the .CSS extension_ in the `css` folder. (ie. if you have a file named `theme-dark.css` it should like like `href="css/theme-dark.css"`)


To Do
------
* ~~Add support for old browsers~~ **Done**. I think.
* ~~Add mascots?~~ **Done**.
* ~~Add idiot-proof and useless explanations because I don't know what to do with my life anymore? **Done**.~~
* ???


Disclaimer
----------
I do not own any of the images included in this project, I found them in a Google Images search.  
~~_I'm innocent, I swear._~~