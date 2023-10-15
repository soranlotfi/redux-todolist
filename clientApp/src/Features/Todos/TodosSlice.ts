import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface TodoState {
    name: string,
    type: string,
    description: string
}

const initialState: TodoState[] = [
    {
    name: "hello",
    type: "hi",
    description: "by",
}
]

const TodoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        AddTodo(state,action:PayloadAction<TodoState>){
            state.push(action.payload)
        }
    }
})

export const {AddTodo} =TodoSlice.actions
export default TodoSlice