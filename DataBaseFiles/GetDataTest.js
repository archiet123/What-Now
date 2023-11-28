var Manager = require("./DBManager.js");
var DB = Manager.db;

exports.GetNames = () => {
    const qry = "Select * FROM Test";
    let stmt = DB.prepare(qry);
    let result = stmt.all();
    return result;
}