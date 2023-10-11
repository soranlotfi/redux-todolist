import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface appBarState {
    value: number
}

const initialState: appBarState = {
    value: 0
}

const appBarSlice = createSlice({
    name: "appBar",
    initialState,
    reducers: {
        setTabValue(state, action: PayloadAction<number>) {
            state.value = action.payload
        }
    }
})

export const {setTabValue} = appBarSlice.actions
export default appBarSlice.reducer