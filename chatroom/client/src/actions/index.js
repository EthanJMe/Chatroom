import * as api from '../api/index';

import { redux_addChat, redux_addChat, redux_getChat } from '../state/chatSlice';

export const getTestData = () => async (dispatch) => {
    try {
        const { data } = await api.testGet()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const postTestData = () => async (dispatch) => {
    try {
        const { data } = await api.testPost()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export const retrieveChats = () => async (dispatch) => {
    try {
        const {data} = await api.axios_getChat()
        dispatch(redux_addChat(data))
    } catch (error) {
        console.log(error)
    }
}

export const addChats = (data) => async (dispatch) => {
    try {
        await api.axios_addChat(data)
        dispatch(redux_addChat(data))
    } catch (error) {
        console.log(error)
    }
}