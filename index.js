/**
 * =====================================
 * gulp-bye-bye-magento-wysiwyg
 * =====================================
 * Author your WYSIWYG content in your editor of choice.
 *
 * First, create the block/page in the admin and get the ID.
 *
 * Then, use as follows
 *
 * gulp byeBye --db mydb --file mydata.html --type block --id 34
 *
 */
var gutil = require('gulp-util');
var mysql = require('mysql');
var fs = require('fs');
var byeBye = {
    /**
     * Do yo thang
     *
     * @return void
     */
    run: function()
    {
        var connection = this._getConnection();
        connection.connect();
        var data = connection.escape(fs.readFileSync(gutil.env.file, 'utf-8'));
        var type = gutil.env.type;
        var id = gutil.env.id;
        var sql = "UPDATE cms_" + type + " SET content=" + data + " WHERE " + type + "_id=" + id;
        connection.query(sql, function(err, rows, fields) {
            if (err) {
                throw err;
            }
            console.log("Successfully inserted data");
        })
        connection.end();
    },
    /**
     * Get a MySQL connection
     *
     * @return Connection
     */
    _getConnection: function()
    {
        var host = gutil.env.host || 'localhost';
        var port = gutil.env.port || 3306;
        var user = gutil.env.user || 'root';
        var pass = gutil.env.pass || '';
        var db = gutil.env.db;
        return mysql.createConnection({
            host: host,
            user: user,
            password: pass,
            database: db
        });
    }
};

module.exports = byeBye;
