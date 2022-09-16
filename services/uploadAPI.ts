import axios, {AxiosResponse} from 'axios'
import { apiURL } from '../lib/constants'


export type UploadResponsePayloadType = { fileLinks: string[] }
export type DeleteResponsePayloadType = { message: string }

export type UploaderApiOptionsType = {
    token: string
    chunkName?: string
    formData?: FormData
    data?: {
        imageLinks?: string[]
        files?: File[]
    }
}

export async function uploadHandler({token, data}: UploaderApiOptionsType): Promise<AxiosResponse<UploadResponsePayloadType>> {
    const formData = new FormData()
    data!.files!.forEach(file => formData.append(`skillmapsImages`, file))
    return axios.post(
        `${apiURL}upload`,
        formData,
        {
            headers: {'Authorization': `${token ? `Bearer ${token}` : ''}`}
        }
    )
}

export async function uploadChunkHandler({token, chunkName, formData}: UploaderApiOptionsType): Promise<AxiosResponse<UploadResponsePayloadType>> {
    return axios.post(
        `${apiURL}upload/in-chunk/${chunkName}`,
        formData,
        {
            headers: {'Authorization': `${token ? `Bearer ${token}` : ''}`}
        }
    )
}

export async function deleteFileHandler({token, data}: UploaderApiOptionsType): Promise<AxiosResponse<DeleteResponsePayloadType>> {
    return axios.post(
        `${apiURL}upload/delete`,
        data,
        {
            headers: {'Authorization': `${token ? `Bearer ${token}` : ''}`}
        }
    )
}

export async function deleteChunkFileHandler({token, data, chunkName}: UploaderApiOptionsType): Promise<AxiosResponse<DeleteResponsePayloadType>> {
    return axios.post(
        `${apiURL}upload/delete-from-chunk/${chunkName}`,
        data,
        {
            headers: {'Authorization': `${token ? `Bearer ${token}` : ''}`}
        }
    )
}
