import * as api from '../api/index';

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