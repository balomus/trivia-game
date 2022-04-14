import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    amount: "10",
    category: "",
    difficulty: "",
    type: "",
    apiResponse: []
}

export const builderSlice = createSlice({
    name: 'builder',
    initialState,
    reducers: {
        setAmount: (state, action) => {
            state.amount = action.payload;
        },
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        setDifficulty: (state, action) => {
            state.difficulty = action.payload;
        },
        setType: (state, action) => {
            state.type = action.payload;
        },
        setApiResponse: (state, action) => {
            state.apiResponse = action.payload;
        }
    }
});

export const { setAmount, setCategory, setDifficulty, setType, setApiResponse } = builderSlice.actions;

export const selectAmount = (state) => state.builder.amount;
export const selectCategory = (state) => state.builder.category;
export const selectDifficulty = (state) => state.builder.difficulty;
export const selectType = (state) => state.builder.type;
export const selectApiResponse = (state) => state.builder.apiResponse;

export default builderSlice.reducer;