import { Request, Response, NextFunction } from 'express'

interface IToken {
    firstName: String,
    lastName: String,
    id: String,
    email: String,
    login_name: String,
    infra_access: String,
    iat: Number,
}

export default (req: Request, res: Response, next: NextFunction) => {
    const user: IToken  = req.app.get('user');
    const infraAccessList: String[] = user.infra_access.split(',');
    console.warn(infraAccessList);
    if(infraAccessList.includes('admin'))
        return next();
    return res.sendStatus(403);
}