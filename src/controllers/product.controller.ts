import {Request, Response} from 'express';
import {create, index} from '../services/product.service';
import {StatusCodesEnum} from "../utils/enums/status.codes.enum";

export const allProducts = async (req: Request, res: Response) => {
    try {
        return res.status(StatusCodesEnum.OK).json({
            success: true,
            data: await index(res.locals.user)
        })
    } catch (error: any) {
        return res.status(StatusCodesEnum.BAD_REQUEST).json({
            success: false,
            error: error.message,
        })
    }
}

export const store = async (req: Request, res: Response) => {
    try {
        return res.status(StatusCodesEnum.CREATED).json({
            success: true,
            data: await create(req.body, res.locals.user)
        })
    } catch (error: any) {
        return res.status(StatusCodesEnum.BAD_REQUEST).json({
            success: false,
            error: error.message,
        })
    }
}