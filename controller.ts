import { Request, Response } from "express"
import axios from 'axios'

export const getUserData = async (request:Request,response:Response) => {
    try{
        const userData = (await axios.get(`${request.query.service_b_url}`)).data.userDetails
        return response.status(200).json({userData})
    } catch(error:any){
        console.error('Error--->',error.message)
        return response.status(400).json({message: error.message})
    }
}