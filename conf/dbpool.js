const postgres = require('postgres')
const env = require('./env')



module.exports = (pools) => {
	env('..', 'dbconf')
	switch (pools) {
		case 'author':
			return postgres({
				database: PGDATABASE,
				host: PGHOST,
				username: PGUSER,
				password: PGPASSWORD,
				port: 5432,
				ssl: 'require',
				connection: {
					option: `project=${ENDPOINT_ID}`
				}
			})
		default :
			return {
				"status" : 502,
				"msg" : "Bad request from server :("
			}
	}
}