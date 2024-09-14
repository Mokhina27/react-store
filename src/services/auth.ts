import { IRegister } from "../types";
import api from "./api";
import { ILogin } from '../types/index';
import { useMutation, useQuery } from "@tanstack/react-query";
import Cookie from 'js-cookie'

export const getUsersData = () => {
    return useQuery(['user'], () => api.get('auth/users/profile'), {
        select: ({data}) => data
    })
}


export const registerUser = () => {
    return useMutation((data:IRegister) => api.post('auth/register', data))
}
export const loginUser = () => {
    return useMutation((data:ILogin) => api.post('auth/login', data), {
        onSuccess: ({ data }) => {
            if(data && data.access) {
                Cookie.set('access_token', data.access, { expires: 30 })
                Cookie.set('refresh_token', data.refresh, { expires: 30 })
            }
        }
    })
}