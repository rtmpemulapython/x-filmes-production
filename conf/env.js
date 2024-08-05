

module.exports = (path, priv) => {
	require('dotenv')
	if ( process.env.NODE_ENV == 'dev' )  {
		require('dotenv').config({
			path : `${path}/var/.env.dev`
		})
	} else {
		require('dotenv')
	}

	switch (priv) {
		case 'dbconf':
			process.env.PGPASSWORD = decodeURIComponent(process.env.PGPASSWORD)
			return { 
				PGHOST, 
				PGDATABASE, 
				ENDPOINT_ID, 
				PGUSER, 
				PGPASSWORD
			} = process.env
		default : 
			return { 
				ROUTE_DEV, 
				PORT, 
				MSG 
			} = process.env
	}
}