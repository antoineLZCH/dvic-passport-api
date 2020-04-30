import { Request } from 'express';

export default (req: Request)=>{
    if(req.headers.authorization){
        const [prefix, token] = req.headers.authorization.split(' ');
        return prefix == "Bearer" ? token : null;
    }
    return null;
}