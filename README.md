# gulp-bye-bye-magento-wysiwyg
Take the pain out of the editing Magento CMS content and say "bye bye" to the WYSIWYG.

Edit your file locally in your editor of choice. Use gulp to watch the file and run the "byeBye" task against it. The relevant record will automatically be updated in the Magento database every time you save.

## Usage

Sample `gulpfile.js`.
```
var gulp = require('gulp');
var gutil = require('gulp-util');
var byeBye = require('gulp-bye-bye-magento-wysiwyg');

gulp.task('byeBye', function() {
    gulp.watch(gutil.env.file, function() {
        byeBye.run();
    });
})
```

And then at the command line...

```
gulp byeBye --db mydb --file mydata.html --type block --id 34
```

You should create and grab to ID of the CMS page or block before running

## Arguments

Pass the following arguments at the command line

- `db`: DB name
- `host`: DB host. Defaults to `localhost`
- `port`: DB port. Defaults to `3306`
- `user`: DB user. Defaults to `root`
- `pass`: DB password. Blank by default
- `file`: The name of the file you are editing
- `type`: Either `block` (for static blocks) or `page` (for pages)
- `id`: The ID of the CMS page or block
