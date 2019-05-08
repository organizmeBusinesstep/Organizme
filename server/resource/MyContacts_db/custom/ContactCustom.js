
const app = require('../../../app.js');
const db_MyContacts_db = require('../../../db/MyContacts_db_schema.js');
const logger = require('../../../logger.js');
const handleError = require('../../../security/util.js').handleError;
const properties = require('../../../properties.js');


// start documentation
/*
 * SCHEMA DB Contact
 * 
	{
		email: {
			type: 'String'
		},
		name: {
			type: 'String', 
			required : true
		},
		note: {
			type: 'String'
		},
		phone: {
			type: 'String'
		},
		surname: {
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


//CRUD - GET LIST
	
app.get(properties.api + '/contacts', function(req, res){
	db_MyContacts_db.Contact.find().populate('company').exec(function(err, list){
		if (err) return handleError(err, res);
		res.send(list);
	});
});
