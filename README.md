### What is this repository for? ###

This repository is a template for starting a new website at New York Ave.

### Prerequisites ###

The following prerequisites need to be installed on your computer:

* Git
* Node
* NPM
* Gulp

### How do I get set up? ###

* In your console, cd to your project directory.
* Clone this repo to your computer. Use the URL in the field at the top right corner of the screen as the GIT_REPO_URL.
```
git clone https://GIT_REPO_URL PROJECT_NAME_HERE
```
* Rename the newly cloned directory as necessary.
* Run the following commands in the new project directory:
```
npm install gulp
```
* Followed by:
```
npm install --save-dev gulp-concat gulp-rename gulp-zip gulp-sass gulp-sass-glob-import gulp-autoprefixer gulp-clean-css gulp-uglify gulp-htmlrender gulp-htmlmin del
```

* Create a new repository in Bitbucket under 'Web Design'. Copy the URL in the field at the top right corner of the screen.
* Finally, while you are in the directory for the local repository run the following command to update your remote URL. Use the URL that you copied in the previous step.
```
git remote set-url origin https://github.com/USERNAME/OTHERREPOSITORY.git
git push -u origin --all # pushes up the repo and its refs for the first time
git push origin --tags # pushes up any tags
```

After all this is done, don't forget to update your new repo's README appropriately.

### How do import this theme into Weebly? ###

* In the Weebly editor, go to the 'Theme' tab.
* In the sidebar click 'Change Theme'.
* Click 'Import Theme' and select the ZIP file located in the theme's *dist* directory.

The custom theme is now available in the 'custom' tab of the 'Change Theme' menu.

After you have imported the theme, be sure to copy the contents of any files from *weebly_partials* into the files in the Weebly editor.

You can make incremental updates by copying the contents of CSS, HTML, JS files from the *dist* directory into the files in the Weebly editor.

### To-Dos: ###

N/A

### Who do I talk to? ###

* If you have any issues contact Chris Campbell.