import {Grid, Typography} from "@mui/material";
import React from "react";
import {useAppDispatch, useAppSelector} from "../../../../App/hooks.ts";
import SButton from "../../../../Components/SButton";
import {HandleEdit} from "../../../../Features/Todos/TodosSlice.ts";
import {TodoInterFace} from "../../../../Types/App/slices.type.ts";

const Todos: React.FC = () => {
    const dispatch = useAppDispatch()
    const todos = useAppSelector(state => state.todos.todoList)
    function handleEdit(id: string | undefined) {
        const newTodos : TodoInterFace[] = todos.map(todo => {
            if (todo.id === id) {
                return {...todo, edit: !todo.edit}
            }
            return {...todo, edit: false}
        })
        dispatch(HandleEdit(newTodos))
    }

    return (
        <Grid item flexDirection={"row"} container justifyContent={"center"} alignItems={"center"} height={"100%"}
              sx={{overflowY: "scroll"}} gap={"2rem"}>
            {
                todos.map((todo, index) => (
                    <Grid item container xs={11} p={"1.5rem"} border={"1px solid blue"} key={index}>
                        <Grid item container xs={8} flexDirection={"column"} rowSpacing={".8rem"}>
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
                        <Grid container item xs={4}>
                            {/*  <Grid item xs={12}>
                                <SButton onClick={()=>dispatch(DeleteTodo(todo.id))}>Delete</SButton>
                            </Grid>*/}
                        </Grid>
                        <Grid container item xs={4}>
                            <Grid item xs={12}>
                                <SButton onClick={() => handleEdit(todo.id)}>Edit</SButton>
                            </Grid>
                        </Grid>
                    </Grid>

                ))
            }
        </Grid>
    )
}


export default Todos