import {createSlice,PayloadAction} from "@reduxjs/toolkit"
 interface AppbarState{
    value:number
 }

const initialState:AppbarState={
    value:0
}

const AppbarSlice = createSlice({
    name:"appBar",
    initialState,
    reducers:{
        setValue(state , action:PayloadAction<number>){
            state = action.payload
        }
    }
})

export const {setValue} = AppbarSlice.actions
export default  AppbarSlice.reducer