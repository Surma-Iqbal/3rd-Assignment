import JWT from "jsonwebtoken"
export const jwtTokenGen =(obj)=>{
return JWT.sign(obj,process.env.JWT_SEC)
}
export const jwtTokenDec =(token)=>{
    return JWT.sign(token,process.env.JWT_SEC)
}