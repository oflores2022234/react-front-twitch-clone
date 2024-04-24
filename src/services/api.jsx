import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:3510/twitch/v1',
    timeout: 1000
})

apiClient.interceptors.request.use(
    (config) =>{
        const userDetails = localStorage.getItem('user')
        if(userDetails){
            const token = JSON.stringify(userDetails).token
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (e) =>{
        return Promise.reject(e)
    }
)

export const login = async (data) => {
    try {
        return await apiClient.post('./auth/login', data)
    } catch (e) {
        return{
            error: true,
            e
        }
        
    }
}

export const register = async (data) => {
    try {
        return await apiClient.post('./auth/register', data)
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}

export const getChannelsDetails = async (channelId) => {
    try {
        return await apiClient.get(`/channels/${channelId}`)
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}

export const getChannels = async () => {
    try {
        return await apiClient.get(`/channels`)
    } catch (e) {
        return{
            error: true,
            e
        }
    }
}
