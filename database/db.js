const Pool = require('pg').Pool

const pool = new Pool({
    host: "ep-black-pond-053520.eu-central-1.aws.neon.tech",
    database: "neondb",
    user: "Un22y",
    password: 'EhyMCl3Z6TWq',
})

module.exports = pool;