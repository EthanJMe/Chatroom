import { createSlice } from '@reduxjs/toolkit';

export const chatSlice = createSlice({
    name: 'chatSlice',
    initialState: {
        content: { chatData: null },
        messageContent: []
    },
    reducers: {
        redux_addChat: (state, action) => {
            console.log(action.payload)
            state.content.push(action.payload)
        },
        redux_deleteChat: (state, action) => {
            state.content.splice(action.payload, 1);
        },
        redux_saveChatContents: (state, action) => {
            console.log(action.payload)
            state.messageContent = action.payload
        }
    }
})

export const { addChat, deleteChat, saveChatContents, } = chatSlice.actions;
export default chatSlice.reducer;