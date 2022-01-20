import { createSlice } from '@reduxjs/toolkit';
// import localData from '../SiteData';

export const chatSlice = createSlice({
    name: 'chatSlice',
    initialState: {
        content: [],
        messageContent: []
    },
    reducers: {
        redux_addChat: (state, action) => {
            state.content.unshift(action.payload)
            console.log(state.content);
        },
        redux_deleteChat: (state, action) => {
            state.content.splice(action.payload, 1);
            // localStorage.setItem("storedContent", JSON.stringify(state.content))
        },
        redux_getChat: (state, action) => {
            state.content = action.payload;
        },
        redux_saveChatContents: (state, action) => {
            console.log(action.payload)
            state.messageContent = action.payload
        }
    }
})

export const { redux_addChat, redux_deleteChat, redux_getChat, redux_saveChatContents } = chatSlice.actions;
export const SelectChat = (state) => state.chat.content;
export default chatSlice.reducer;