const db = require('./db')

async function getLaguAll(){
    const rows = await db.query(`SELECT * FROM lagu`)
    const data = rows

    return data   
}

async function getLaguNegara(negara){
    const rows = await db.query(`SELECT * FROM lagu where kdbahasa='${negara}'`)
    const data = rows

    return data   
}

module.exports = {
    getLaguAll,
    getLaguNegara,
}