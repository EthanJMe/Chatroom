import { createSlice } from '@reduxjs/toolkit';
// import localData from '../SiteData';

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        content: [],
    },
    reducers: {
        redux_addUsers: (state, action) => {
            state.content.push(action.payload)
            console.log(action.payload);
        },
        redux_getUsers: (state, action) => {
            state.content = action.payload;
        }
    }
})

export const { redux_addUsers, redux_getUsers } = userSlice.actions;
export const SelectUsers = (state) => state.users.content
export default userSlice.reducer;