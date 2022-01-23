const db = require('../config/db')

class contact {
    static createContact = async (req,res) => {
        const sqlQuery = await `INSERT INTO contact SET fullname = "${req.body.fullname}", phone = ${req.body.phone}, note = "${req.body.note}" `;
        db.query(sqlQuery, function (err, results) {
            if (results) {
                res.json({status:200, payload: results, message: "Contact Created"})
            } else {
                res.json ({message: err})
            }
        })
    } 

    static getAllContact = async (req,res) => {
        const sqlQuery = await `SELECT * FROM contact`;
        db.query(sqlQuery,function (err, results) {
            if (results) {
                res.json ({status:200, payload: results, message: "Nyoh slur"})
            } else {
                res.json ({message: err})
            }
        })
    }

    static getOneContact = async (req,res) => {
        const sqlQuery = await ` SELECT * FROM contact WHERE id = ${req.params.id} LIMIT 1 `
        db.query(sqlQuery,function (err,results) {
            if(results) {
                res.json ({status:200, payload: results, message: "Temu gaes"})
            } else {
                res.json ({message: "gagal"})
            }
        })
    }

    static deleteContact = async (req,res) => {
        const sqlQuery = await ` DELETE FROM contact WHERE id = ${req.params.id} `;
        db.query(sqlQuery, function (err,results) {
            if (results) {
                res.json({status:200, payload: results, message: "loh kok ilang"})
            } else {
                res.json({message:"gagal"})
            } 
        })
    }

    static editContact = async (req,res) => {
        const sqlQuery = await ` UPDATE contact SET fullname = '${req.body.fullname}', phone = ${req.body.phone}  , note = '${req.body.note}' WHERE id = ${req.params.id} `;
        db.query(sqlQuery,function (err,results) {
            if (results) {
                res.json({status:200, payload: results, message:"Henshin !!"})
            } else {
                res.json({message:"gagal"})
            }
        })
    }
}

module.exports = contact

