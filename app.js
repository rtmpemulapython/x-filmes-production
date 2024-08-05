const express = require('express')
const app = express()
const path = require('path')
const env = require('./conf/env')
const dbpool = require('./conf/dbpool')

env('.')

app.get(ROUTE_DEV, async (req, res) => {
	try {
		const response = await dbpool('author')`
			select now()
		`
		res.status(200).send({
			"status" : 200,
			"msg" : "Ok!",
			"response" : response
		})
	} catch (err) {
		res.status(200).send({
			"status" : 502,
			"msg" : "Internal Server Error",
			"Error" : err
		})
	}

})

app.use((req, res) => {
	res.status(404).send({		
		"status" : 404,
		"msg": "Wrong Endpoint Dude >:("
	})
})

app.listen(PORT, () => {
	console.log(`Server Listen On http://localhost:${PORT}${ROUTE_DEV}`)
})
