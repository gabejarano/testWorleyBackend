

module.exports = {
    mysqlDB: {
        DB: process.env.DB_DESARROLLO,
        USER_DB: process.env.USER_DB_DESARROLLO,
        PASSWORD_DB: process.env.PASSWORD_DB_DESARROLLO,
        HOST_DB: process.env.HOST_DB_DESARROLLO
    },
    auth: {
        SECRET_KEY: process.env.AUTH_SECRET_KEY
    },
}