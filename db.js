const mssql = require('mssql')
const dbConfig = {
    user: 'rique',
    password: 'Vai2023!',
    server: 'budgefy.database.windows.net',
    database: 'budgefy',
    options: {
        encrypt: true,
        trustServerCertificate: false,
        enableArithAbort: true,
        connectionTimeout: 30000,
    },
    driver: 'ODBC Driver 18 for SQL Server',
};

const pool = new mssql.ConnectionPool(dbConfig);
module.exports = pool