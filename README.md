## SDMHF - Super Duper Micro Html Framework
What is it? Basically if you are tired of react, angular or whatever you use and just want simple HTML boilerplate you can use `SDMHF` which is just couple of gulp commands to help you automate whole process while being able to use partials/components.

 ### Folder structure
        /img
            here you add your images
        /css
            here you add your css files
        /js
            here you add your js files
        /html
            html goes here
        /html/partials
            your html partials

### How to use?

##### Html
To include a partial just do for example `@@include('partials/_nav.html')` for more informations go to https://github.com/coderhaoxin/gulp-file-include

##### CSS & JS
Add any files to bundle and minify them in alphabetical order.

#### End result
  After bundling everything goes to '/bundle' folder.


### Installation

    To do before
    Install `http-server` with `npm install http-server -g`

Then:

1. Open terminal and go to your project folder
2. Use command to install `npm install`
3. Then use command `gulp` to run project
4. Open browser at http://localhost:8080/build



### Changelog

#### 1.0.0
  -first release
