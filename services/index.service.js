const connect = require('../config/database')

module.exports = {
    getWebInfo:(data,callback)=>{
        connect.query(
            '',
            [],
            (err,results,fields)=>{
                if(err){
                    return callback(err)
                }
                return callback(null,results)
            }
        )
    }
}