
const {StatusCodes}=require("http-status-codes");
const info=(req,res)=>{
    return res.status(StatusCodes.OK).json({
        message:"ok"
    })
}

module.exports={info}