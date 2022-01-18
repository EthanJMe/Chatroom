import { createSlice } from '@reduxjs/toolkit';
// import localData from '../SiteData';

export const chatSlice = createSlice({
    name: 'chatSlice',
    initialState: {
        content: { chatData: null }
    },
    reducers: {
        redux_addChat: (state, action) => {
            console.log(action.payload)
            state.content.push(action.payload)
        },
        redux_deleteChat: (state, action) => {
            state.content.splice(action.payload, 1);
            // localStorage.setItem("storedContent", JSON.stringify(state.content))
        },
        redux_getChat: (state, action) => {
            state.content = action.payload;
        }
    }
})

export const { redux_addChat, redux_deleteChat, redux_getChat } = chatSlice.actions;
export default chatSlice.reducer;