import {configureStore} from "@reduxjs/toolkit";
import appBarSlice from "../Features/AppBar/appBarSlice.ts";
import todosSlice from "../Features/Todos/TodosSlice.ts";

export const store = configureStore({
    reducer :{
        appBar:appBarSlice,
        todo:todosSlice
    }
})


export type AppDispatch =typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

//this types will updates automatically when we add more slices (hover mouse to know more a bout it :))