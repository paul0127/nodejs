import {getWebInfo} from './services/index.service'

module.exports = {
    getWebInfo: (req,res) => {
        let body
        getWebInfo(body,(err,results)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message:'fail'
                })
            }

            return res.status(200).json({
                success:1,
                data:results,
                message:''
            })
        })
    }
}