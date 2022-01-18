import * as api from '../api/index';

import { addChat, deleteChat } from '../state/chatSlice';

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
        const {data} = await api.getChats()
        dispatch(addChat(data))
    } catch (error) {
        console.log(error)
    }
}

export const addChats = () => async (dispatch) => {
    try {
        const {data} = await api.addChat()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}