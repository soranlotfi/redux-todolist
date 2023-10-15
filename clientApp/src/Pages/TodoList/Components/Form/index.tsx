import {Grid} from "@mui/material";
import SInput from "../../../../Components/Sinput";
import SButton from "../../../../Components/SButton";
import React from "react";
import {useFormik} from "formik";
import * as Yup from 'yup';
import {useAppDispatch, useAppSelector} from "../../../../App/hooks.ts";
import {AddTodo} from "../../../../Features/Todos/TodosSlice.ts";

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

const TodoForm: React.FC = () => {
    const dispatch=useAppDispatch()
    const Values=useAppSelector(state => state)

    const handleSubmit = (values:FormValues)=>{
        dispatch(AddTodo(values))
    }

    const formik =useFormik({
        initialValues:initialValues,
        validationSchema:validationSchema,
        onSubmit:handleSubmit,
    })
    return (
        <Grid item container role={"form"} onSubmit={formik.handleSubmit} component={"form"} justifyContent={"center"}
              alignItems={"center"} rowSpacing={"2rem"} p={"2rem"}>
            <Grid item xs={11}>
                <SInput
                    name={"name"}
                    id={"name"}
                    label={"name"}
                    value={formik.values.name}
                    onChange={formik.handleChange}
                />
            </Grid>
            <Grid item xs={11}>
                <SInput
                    name={"type"}
                    id={"type"}
                    label={"type"}
                    value={formik.values.type}
                    onChange={formik.handleChange}

                />
            </Grid>
            <Grid item xs={11}>
                <SInput
                    name={"description"}
                    id={"description"}
                    label={"description"}
                    value={formik.values.description}
                    onChange={formik.handleChange}

                />
            </Grid>
            <Grid item xs={11}>
                <SButton width={"100%"} padding={"1rem 0"} bgcolor={"green"} color={"white"}
                         type={"submit"}>Submit</SButton>
            </Grid>
        </Grid>
    )
}

export default TodoForm