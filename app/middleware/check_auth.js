const jwtToken =require('jsonwebtoken');

checkAuth=(req,res,next)=>{
    try{
        const tokenVerfiy =jwtToken.verify(req.body.token,"secret");
        console.log(tokenVerfiy);
        if(tokenVerfiy){
            return  res.status(202).send({
                message: 'Valid Token',
                sucess: true
            });

        }else{
            return  res.status(401).send({
                message: 'Invalid Token',
                sucess: false

            });
        }
    }catch{
        return  res.status(401).send({
            message: 'Auth Failed third',
            sucess: false
        });
    }
}

module.exports={checkAuth};