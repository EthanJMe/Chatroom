import { createSlice } from '@reduxjs/toolkit';
import localData from '../SiteData';

export const chatSlice = createSlice({
    name: 'chatSlice',
    initialState: {
        content: { chatData: null }
    },
    reducers: {
        addChat: (state, action) => {
            console.log(action.payload)
            state.content.push(action.payload)
        },
        deleteChat: (state, action) => {
            state.content.splice(action.payload, 1);
            localStorage.setItem("storedContent", JSON.stringify(state.content))
        }
    }
})

export const { addChat, deleteChat } = chatSlice.actions;
export default chatSlice.reducer;