import {createSlice, PayloadAction} from "@reduxjs/toolkit"

interface languages {
    value: 'en' | 'fa'
}

const initialState: languages = {
    value: 'en'
}

const setLanguageSlice = createSlice({
    name: "language",
    initialState,
    reducers: {
        setLanguage(state, action: PayloadAction<'en' | 'fa'>) {
            state.value = action.payload
        }
    }
})

export const {setLanguage} = setLanguageSlice.actions
export default setLanguageSlice.reducer