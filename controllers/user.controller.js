const {checkUser} = require('../services/user.service')
const jwt = require('jsonwebtoken')
const config = {JWT_SIGN_SECRET:'123456'}

module.exports = {
    getUserToken: (req,res) => {
        let body = {
            account:req.body.account,
            password:req.body.password
        }

        checkUser(body,(err,results)=>{
            if(err){
                console.log(err)
                return res.status(500).json({
                    success:0,
                    message:'fail'
                })
            }

            const {account,password} = body
            const token = jwt.sign({account,password},config['JWT_SIGN_SECRET'])
            const data = {
                account,
                token
            }

            return res.status(200).json({
                success:1,
                data,
                message:''
            })
        })
    },
    getUserInfo:(req,res)=>{
        const token = req.headers.authorization.split(' ')[1]
        let body
        jwt.verify(token,config['JWT_SIGN_SECRET'],(err,decode)=>{
            if(err){
                return res.status(500).json({
                    success:0,
                    message:'token錯誤'
                })
            }else{
                body = {
                    account:decode.account,
                    password:decode.password
                }
            }
        })

        checkUser(body,(err,results)=>{
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