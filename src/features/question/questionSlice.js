import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentQuestion: {
        category: "category sample",
        difficulty: "difficulty sample",
        type: "type sample",
        question: "question sample",
        correct_answer: "correct sample",
        incorrect_answer: ["incorrect1", "incorrect2", "incorrect3"]
    },
    questionNumber: 1
}

export const questionSlice = createSlice({
    name: 'question',
    initialState,
    reducers: {
        setCurrentQuestion: (state, action) => {
            state.currentQuestion = action.payload;
        },
        setQuestionNumber: (state, action) => {
            state.questionNumber = action.payload;
        }
    }
})

export const { setCurrentQuestion, setQuestionNumber } = questionSlice.actions;

export const selectCurrentQuestion = (state) => state.question.currentQuestion;
export const selectQuestionNumber = (state) => state.question.questionNumber;

export default questionSlice.reducer;