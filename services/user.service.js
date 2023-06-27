const connect = require('../config/database')

module.exports = {
    checkUser:(data,callback)=>{
        connect.query(
            'select * from user where account = ? and password = ?',
            [data.account,data.password],
            (err,results,fields)=>{
                if(err){
                    return callback(err)
                }
                return callback(null,results)
            }
        )
    }
}