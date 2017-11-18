Florida Aquatic Gems website
===

This repository is the website for [Florida Aquatic Gems](http://www.floridaaquaticgems.com/).

FAQ
===

If you have any questions that aren't covered below, contact Peter Croce.

## What must be installed?

* Git
* Node.js
* npm
* gulp

## How do I get set up?

* In your console, cd to the directory where you want to keep this repo.
* Clone the repo to your computer.
```
git clone https://bitbucket.org/newyorkave/florida-aquatic-gems
```
* To install this template's dependencies, run:
```
npm install
```

## How do I import this theme into Weebly?

* In the Weebly editor, go to the 'Theme' tab.
* In the sidebar click 'Change Theme'.
* Click 'Import Theme' and select the ZIP file located in the theme's *dist* directory.

The custom theme is now available in the 'custom' tab of the 'Change Theme' menu.

After you have imported the theme, be sure to copy the contents of any files from *weebly_partials* into the files in the Weebly editor.

You can make incremental updates by copying the contents of CSS, HTML, JS files from the *dist* directory into the files in the Weebly editor.

## Notes:

As of 9/5/17, node-sass wasn't ready for npm >= 5. If you're getting errors on install that say `gyp verb which failed`, downgrade to npm 4 or 3 by running `npm install -g npm@4.6.1`. Then remove your node_modules folder and run `npm install` again.

## Who do I talk to if I have a question?

* If you have any questions contact Peter Croce.
