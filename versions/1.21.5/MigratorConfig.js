var config = require('./core/server/config'),
	ghostVersion = require('./core/server/lib/ghost-version');
	
/* ... */  
var pagination = require('ghost-pagination');
var hbs = require('express-hbs');
/* ... */
hbs.registerHelper('paginate', pagination);
/* ... */ 

/**
 * knex-migrator can be used via CLI or within the application
 * when using the CLI, we need to ensure that our global overrides are triggered
 */
require('./core/server/overrides');

module.exports = {
    currentVersion: ghostVersion.safe,
    database: config.get('database'),
    migrationPath: config.get('paths:migrationPath')
};
