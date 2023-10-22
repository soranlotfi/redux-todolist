import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {TodoInterFace, TodoState} from "../../Types/App/slices.type.ts";


const initialState: TodoState = {
    todoList: []
}
const TodoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        AddTodo: (state, action: PayloadAction<TodoInterFace>) => {
            return {...state, todoList: [...state.todoList, action.payload],
            };
        },
        HandleEdit: (state, action: PayloadAction<TodoInterFace[]>) => {
            return {...state, todoList: action.payload}
        },
        EditTodo: (state, action: PayloadAction<TodoInterFace[]>) => {
            return {...state, todoList: action.payload}
        },
        DeleteTodo: (state, action: PayloadAction<TodoInterFace[]>) => {
            return {...state, todoList: action.payload}
        },
        ToggleTodo: (state, action: PayloadAction<TodoInterFace[]>) => {
            console.log(action.payload)
            return {...state, todoList: action.payload}
        }

    }
})

export const {AddTodo, HandleEdit,EditTodo,DeleteTodo,ToggleTodo} = TodoSlice.actions
export default TodoSlice.reducer