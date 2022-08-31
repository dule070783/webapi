const mysql = require('mysql2/promise')
const dbConfig = require('../config/db.config')

async function query(sql,params){
    const connection = await mysql.createConnection(dbConfig)
    const [result,]= await connection.execute(sql,params)

    return result
}

module.exports = {
    query
}