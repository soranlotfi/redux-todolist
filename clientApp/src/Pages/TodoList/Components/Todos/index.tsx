import {Checkbox, Grid, Typography} from "@mui/material";
import React, {useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../../App/hooks.ts";
import SButton from "../../../../Components/SButton";
import {DeleteTodo, HandleEdit, ToggleTodo} from "../../../../Features/Todos/TodosSlice.ts";
import {TodoInterFace} from "../../../../Types/App/slices.type.ts";
import {pink} from "@mui/material/colors";

const Todos: React.FC = () => {
    const [checked, setChecked] = useState<boolean>(false)
    const dispatch = useAppDispatch()
    const todos = useAppSelector(state => state.todos.todoList)

    function handleEdit(id: string | undefined) {
        const newTodos: TodoInterFace[] = todos.map(todo => {
            if (todo.id === id) {
                return {...todo, edit: !todo.edit}
            }
            return todo
        })
        dispatch(HandleEdit(newTodos))
    }

    function handleDelete(id: string | undefined) {
        const TodosAfterDelete: TodoInterFace[] = todos.filter(todo => todo.id !== id)
        dispatch(DeleteTodo(TodosAfterDelete))
    }

    const Toggeler = (event: React.ChangeEvent<HTMLInputElement>, id: string | undefined) => {
        setChecked(event.target.checked);
        const TodosAfterToggle: TodoInterFace[] = todos.map(todo => {
            if (todo.id === id) {
                return {...todo, completed: !todo.completed}
            }
            return todo
        })
        dispatch(ToggleTodo(TodosAfterToggle))
    };

    return (
        <Grid item flexDirection={"row"} container justifyContent={"center"} alignItems={"center"} height={"100%"}
              sx={{overflowY: "scroll"}} gap={"2rem"}>
            {
                todos.map((todo, index) => (
                    <Grid item container xs={11} p={".5rem 1.5rem"} bgcolor={"grey.200"} key={index}>
                        <Grid item container xs={10} flexDirection={"column"} rowSpacing={".8rem"}>
                            <Grid item textAlign={"start"}>
                                <Typography variant={"h2"} fontWeight={"bold"}>
                                    {todo.name}
                                </Typography>
                            </Grid>
                            <Grid item textAlign={"start"}>
                                <Typography variant={"h3"}>
                                    {todo.type}
                                </Typography>
                            </Grid>
                            <Grid item textAlign={"start"}>
                                <Typography variant={"h4"}>
                                    {todo.description}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container xs={2} textAlign={"center"}>
                            <Grid  item xs={12} textAlign={"center"}>
                                <SButton onClick={() => handleDelete(todo.id)}>Delete</SButton>
                            </Grid>
                            <Grid  item xs textAlign={"center"}>
                                <SButton onClick={() => handleEdit(todo.id)}>Edit</SButton>
                            </Grid>
                            <Grid  item xs={12} textAlign={"center"}>
                                <Checkbox
                                    sx={{
                                        color: pink[800],
                                        '&.Mui-checked': {
                                            color: pink[600],
                                        },
                                    }}
                                    checked={todo.completed}
                                    onChange={(e)=>Toggeler(e,todo.id)}
                                    inputProps={{ 'aria-label': 'controlled' }}                                />
                            </Grid>
                        </Grid>
                    </Grid>

                ))
            }
        </Grid>
    )
}


export default Todos