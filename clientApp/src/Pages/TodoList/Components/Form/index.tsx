import {Grid} from "@mui/material";
import SInput from "../../../../Components/Sinput";
import SButton from "../../../../Components/SButton";
import React, {useEffect, useState} from "react";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {useAppDispatch, useAppSelector} from "../../../../App/hooks.ts";
import {AddTodo, EditTodo} from "../../../../Features/Todos/TodosSlice.ts";
import {v4 as uuidv4} from 'uuid';
import {TodoInterFace} from "../../../../Types/App/slices.type.ts";
import {useTranslation} from "react-i18next";

interface FormValues {
    name: string;
    type: string;
    description: string;
}

const initialValues: FormValues = {
    name: '',
    type: '',
    description: '',
};


const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required'),
    type: Yup.string()
        .required('Type is required'),
    description: Yup.string()
        .required('Description is required'),
});

const todo: TodoInterFace = {
    name: "hello world",
    type: "hello habiby",
    description: "lasjdasd"
}

const TodoForm: React.FC = () => {
    const todos:TodoInterFace[] = useAppSelector(state => state.todos.todoList)
    const dispatch = useAppDispatch()
    const [edit,setEdit] = useState<boolean>(false)
    useEffect(() => {
        todos.map(todo=>{
            if(todo.edit){
                formik.setValues(todo)
                setEdit(true)
            }
        })
    }, [todos])

    const handleSubmit = (values: FormValues) => {
        const uuid = uuidv4()
        const editedTodos: TodoInterFace[] = todos.map(todo => {
            if (todo.edit) {
                return {...todo, name: values.name, type: values.type, description: values.description,edit: false}
            }
            return {...todo}
        })
        const todo: TodoInterFace = {
            name: values.name,
            type: values.type,
            description: values.description,
            completed: false,
            edit: false,
            id: uuid
        }
        if (edit) {
            dispatch(EditTodo(editedTodos))
            setEdit(false)
        } else {
            dispatch(AddTodo(todo))
        }
        formik.handleReset({})
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: handleSubmit,
    })

    const {t} = useTranslation('common')

    return (
        <Grid item container role={"form"} onSubmit={formik.handleSubmit} component={"form"} justifyContent={"center"}
              alignItems={"center"} rowSpacing={3} p={"2rem"}>
            <Grid item xs={11}>
                <SInput
                    name={"name"}
                    id={"name"}
                    label={t('todolistSection.name')}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
            </Grid>
            <Grid item xs={11}>
                <SInput
                    name={"type"}
                    id={"type"}
                    label={t('todolistSection.type')}
                    value={formik.values.type}
                    onChange={formik.handleChange}
                />
            </Grid>
            <Grid item xs={11}>
                <SInput
                    name={"description"}
                    id={"description"}
                    label={t('todolistSection.description')}
                    value={formik.values.description}
                    onChange={formik.handleChange}
                />
            </Grid>
            <Grid item xs={11}>
                <SButton width={"100%"} padding={"1rem 0"} bgcolor={"green"} color={"white"}
                         type={"submit"}>{t('todolistSection.submit')}</SButton>
            </Grid>
        </Grid>
    )
}

export default TodoForm