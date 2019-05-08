
const app = require('../../../app.js');
const db_MyContacts_db = require('../../../db/MyContacts_db_schema.js');
const logger = require('../../../logger.js');
const handleError = require('../../../security/util.js').handleError;
const properties = require('../../../properties.js');


// start documentation
/*
 * SCHEMA DB Company
 * 
	{
		address: {
			type: 'String'
		},
		mail: {
			type: 'String'
		},
		name: {
			type: 'String'
		},
		//RELATIONS
		
		
		//EXTERNAL RELATIONS
		
		company: {
			type: Schema.ObjectId,
			ref : "Contact"
		},
		
	}
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
// end documentation

// INSERT HERE YOURS CUSTOM METHODS


