import {service} from "@/utils/core/requests/axios";

const 
    login = async (data:Record<string,string>):Promise<any>=>{
        const res = await service.post('/login',data);
        return res
    },
    signup = async (data:Record<string,string>):Promise<any>=>{
        const res = await service.post('/signup',data);
        return res
    },
    recovery = async (data:Record<string,string>):Promise<any>=>{
        const res = await service.post('/recovery',data);
        return res
    }

export {
    login,
    signup,
    recovery
}