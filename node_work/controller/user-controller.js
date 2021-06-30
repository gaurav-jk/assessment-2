const HttpError = require("../utils/http-error");


const getPost = (req , res , next) => {
    const {title , body} = req.body


    res.status(200).json({title , body})
    
    
}


const getComments = (req,res,next) => {

    console.log(req.body)

}


exports.getComments = getComments
exports.getPost = getPost