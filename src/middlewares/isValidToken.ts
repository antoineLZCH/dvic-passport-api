import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

import getTokenFromRequest from '../helpers/getTokenFromRequest'


const checkToken = (token: string) => {
    const { PUBLIC_KEY } = process.env;
    console.log({PUBLIC_KEY});
    return jwt.verify(token, PUBLIC_KEY, {
        algorithms: ['RS256']
    });
}



export default (req: Request, res: Response, next: NextFunction) => {
    const token = getTokenFromRequest(req);
    if (token && checkToken(token)) {
        req.app.set('user', checkToken(token));
        return next()
    }
    return res.sendStatus(403);
}