const server = require('./api/server.js')

const port = process.env.PORT || 4994
server.listen(port, () => console.log(`\n*^^* ~~API ALIVE ON PORT ${port}~~ *^^*\n`))
