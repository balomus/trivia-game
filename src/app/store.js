import { configureStore } from '@reduxjs/toolkit';
import builderReducer from '../features/builder/builderSlice';
import questionReducer from '../features/question/questionSlice'

export const store = configureStore({
  reducer: {
    builder: builderReducer,
    question: questionReducer,
  },
});
