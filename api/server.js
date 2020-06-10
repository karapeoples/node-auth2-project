const express = require('express')
const helmet = require('helmet')
const morgan = require('morgan')
const session = require('express-session')


const authRouter = require('../api/auth/auth-router')
const usersRouter = require('../api/users/user-router')
const restricted = require('../api/middelware/restricted-middlware')

const sessionConfig = {
	name: 'pecan',
	cookie: {
		maxAge: 1000 * 60 * 60,
		secure: false, //make sure to change true for production
		httpOnly: true,
	},
	secret: 'keep my secret,keep it close',
	resave: false,
	saveUninitialized: true,
}

const server = express()

server.use(helmet(), morgan('dev'), express.json(), session(sessionConfig))
server.use('/api/auth', authRouter)
server.use('/api/users', restricted, checkRole('development'), usersRouter)

server.get('/', (req, res) => {
	res.json('WELCOME TO AUTH 2 API BY KP_13')
})

module.exports = server

function checkRole(role) {
	return (req, res, next) => {
		req.decodedToken && req.decodedToken.role  === role
			? next()
			: res.status(403).json({ error: 'You do not meet role qualifications' })
	}
}
