const connect = require('../config/database')

module.exports = {
    getWebInfo:(data,callback)=>{
        connect.query(
            'select * from info',
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