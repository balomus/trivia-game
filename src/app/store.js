import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import builderReducer from '../features/builder/builderSlice';
import questionReducer from '../features/question/questionSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    builder: builderReducer,
    question: questionReducer,
  },
});
