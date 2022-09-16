import axios, {AxiosResponse} from 'axios'
import { apiURL } from '@lib/constants'
import {User} from '@apiModels/user'
import {UniqueId} from '@apiModels/common'


export type UsersResponsePayloadType = { users: User[] }

export type UserResponsePayloadType = { user: User }

export type UsersApiOptions = {
    userName?: string
    userIds?: number[]
}

export async function getUsersHandler(data: UsersApiOptions | void): Promise<AxiosResponse<UsersResponsePayloadType>> {

    let query = ''

    if (data?.userName) query = `?search_by_full_name=${data?.userName}`
    if (data?.userIds) query = `?${data.userIds.map((id, index) => `ids[${index}]=${id}`)}`
    return axios.get(`${apiURL}user/get-users${query}`)
}


export type ExpertOptions = {
    userId: number
    specializationCode: string
    token: string
}

export async function addExpertHandler(options: ExpertOptions): Promise<any> {

    const {
        userId,
        specializationCode,
        token
    } = options

    return axios.post(
        `${apiURL}specialization/add-expert`,
        {specializationCode, userId},
        {
            headers: {'Authorization': `${token ? `Bearer ${token}` : ''}`}
        }
    )
}

export async function removeExpertHandler(options: ExpertOptions): Promise<any> {

    const {
        userId,
        specializationCode,
        token
    } = options

    return axios.post(
        `${apiURL}specialization/remove-expert`,
        {specializationCode, userId},
        {
            headers: {'Authorization': `${token ? `Bearer ${token}` : ''}`}
        }
    )
}


export type UserOptions = {
    userId: UniqueId,
    token: string
    data: {
        name: string
        lastName: string
        description: string
    }
}

export async function updateUserHandler(options: UserOptions): Promise<AxiosResponse<UserResponsePayloadType>> {

    const {
        userId,
        token,
        data
    } = options

    return axios.put(
        `${apiURL}user/${userId}`,
        data,
        {
            headers: {'Authorization': `${token ? `Bearer ${token}` : ''}`}
        }
    )
}


