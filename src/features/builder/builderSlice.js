import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    amount: "20",
    category: "9",
    difficulty: "easy",
    type: "multiple"
}

export const getQuestions = createAsyncThunk(
    'builder/getTriviaQuestions',
    async (amount, category, difficulty, type) => {
        try {
            const response = await fetch(
                "https://opentdb.com/api.php?amount=" + amount + 
                "&category=" + category + 
                "&difficulty=" + difficulty + 
                "&type=" + type);
            const data = await response.json();
            // setQuestions(data);
            console.log(data);
            // console.log("question - " + data.results[currentQuestion].question + " answer - " + data.results[currentQuestion].correct_answer);
            return response.data;
        } catch (error) {
            return error;
        }
    }
);

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
        }
    }
});

export const { setAmount, setCategory, setDifficulty, setType } = builderSlice.actions;

export const selectAmount = (state) => state.builder.amount;
export const selectCategory = (state) => state.builder.category;
export const selectDifficulty = (state) => state.builder.difficulty;
export const selectType = (state) => state.builder.type;

export default builderSlice.reducer;