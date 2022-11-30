import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    login: {

    }
}

const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        toggleMute(state) {
            state.isMute = !state.isMute;
        }
    }
})

export default commonSlice.reducer;

export const { toggleMute } = commonSlice.actions;