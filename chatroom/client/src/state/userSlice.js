import { createSlice } from '@reduxjs/toolkit';
// import localData from '../SiteData';

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        content: { userData: null }
    },
    reducers: {
        redux_addUsers: (state, action) => {
            console.log(action.payload)
            state.content.push(action.payload)
        },
        redux_getUsers: (state, action) => {
            state.content = action.payload;
        }
    }
})

export const { redux_addUsers, redux_getUsers } = userSlice.actions;
export default userSlice.reducer;