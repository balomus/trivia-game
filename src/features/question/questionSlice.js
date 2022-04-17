import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentQuestion: {
        category: "category sample",
        difficulty: "difficulty sample",
        type: "type sample",
        question: "question sample",
        correct_answer: "correct sample",
        incorrect_answers: ["incorrect1", "incorrect2", "incorrect3"]
    },
    questionNumber: 1,
    correctNum: 0,
    incorrectNum: 0
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
        },
        setCorrectNum: (state, action) => {
            state.correctNum = action.payload;
        },
        setIncorrectNum: (state, action) => {
            state.incorrectNum = action.payload;
        }
    }
})

export const { setCurrentQuestion, setQuestionNumber, setCorrectNum, setIncorrectNum } = questionSlice.actions;

export const selectCurrentQuestion = (state) => state.question.currentQuestion;
export const selectQuestionNumber = (state) => state.question.questionNumber;
export const selectCorrectNum = (state) => state.question.correctNum;
export const selectIncorrectNum = (state) => state.question.incorrectNum;

export default questionSlice.reducer;