const pool = require('../config/db');

exports.findAll = async () => {
    const [rows] = await pool.query("select * from tasks");
    return rows;
};

exports.create = async (data) => {
    const [result] = await pool.execute("insert into tasks (title,priority) values(?,?)", [data.title, data.priority]);
    return result.insertId
};