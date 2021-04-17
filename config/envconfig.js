var config = {
    database: {
        user: 'db_a72d51_intronodejs_admin',
        password: '123quesito',
        server: 'sql5104.site4now.net',
        port: 1433,
        database: 'db_a72d51_intronodejs',
        pool: {
            max: 10,
            min: 0,
            idleTimeoutMillis: 15000
        }
    },
    server: {
        host: 'localhost',
        port: '7000'
    },
    token: 'RANDOM_TOKEN_SECRET'
}
module.exports = config;