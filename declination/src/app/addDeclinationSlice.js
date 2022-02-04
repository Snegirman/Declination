import { createSlice } from "@reduxjs/toolkit";

export const addDeclinationSlice = createSlice({
    name: 'addDeclination',
    initialState: {
        value: '',
    },
    reducers: {
        addWord: (state, item) => {
            state.value = item.payload;
            return state;
        },
    }
})

export const { addWord } = addDeclinationSlice.actions;

export default addDeclinationSlice.reducer;