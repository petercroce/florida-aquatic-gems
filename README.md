How do I clone this project to update or otherwise change it in some way?
======

* In your console, cd to the directory where you keep your website projcts.
* Clone this repo to your computer.
* For the purpose of this tutorial, things in brackets should be replaced with the appropriate replacement. For example, [yourusername], if I were following this, would be peternya and [repo-url], if this were for Swann Real Estate, would be swann-real-estate. You can copy this link from the top right corner of the project.
```
git clone https://[yourusername]@bitbucket.org/newyorkave/[repo-url].git [client-name] # Please be sure repo-url and client-name are the same. This is NYA convention for simplicity.
```
* Run the following commands in the new project directory:
```
npm install gulp
```
* Followed by:
```
npm install --save-dev gulp-concat gulp-rename gulp-zip gulp-sass gulp-sass-glob-import gulp-autoprefixer gulp-clean-css gulp-uglify gulp-htmlrender gulp-htmlmin del
```

After all this is done, don't forget to update your new repo's README appropriately.

How do import this theme into Weebly?
======

* In the Weebly editor, go to the 'Theme' tab.
* In the sidebar click 'Change Theme'.
* Click 'Import Theme' and select the ZIP file located in the theme's *dist* directory.

The custom theme is now available in the 'custom' tab of the 'Change Theme' menu.

After you have imported the theme, be sure to copy the contents of any files from *weebly_partials* into the files in the Weebly editor.

You can make incremental updates by copying the contents of CSS, HTML, JS files from the *dist* directory into the files in the Weebly editor.

### To-Dos: ###

N/A

### Who do I talk to? ###

* If you have any issues contact Peter Croce.
