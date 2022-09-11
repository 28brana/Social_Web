import { createSlice } from "@reduxjs/toolkit"
import { dispatch } from "../store";

const initialState = {
    tabIndex: 0,
}

const routerSlice = createSlice({
    name: 'router',
    initialState,
    reducers: {
        updateTabIndex(state, action) {
            state.tabIndex = action.payload;
        }
    }
})

export default routerSlice.reducer;

export const { updateTabIndex } = routerSlice.actions;