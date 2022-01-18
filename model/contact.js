const db = require('../config/db')
const dc = require('../config/db')

exports.getAll = (req, res) => {
    const sqlQuery = "SELECT * FROM contact"
    db.query(sqlQuery, function(err, result) {
        res.json ({status: 200, payload: result})
    })
}