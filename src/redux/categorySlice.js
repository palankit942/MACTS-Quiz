import { createSlice } from "@reduxjs/toolkit";

const initialState = { questions: {}, score: 0 };

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    resetScore: (state) => {
      state.score = 0;
    },
    incrementScore: (state) => {
      state.score += 10;
    },
    setQuestions: (state, action) => {
      state.questions = action.payload;
    },
    updateUserClick: (state, action) => {
      state.questions.quiz.map((ques) =>
        ques.options.map((ans) =>
          ans.id === action.payload ? (ans.isClick = true) : ans
        )
      );
    },
  },
});

export const { resetScore, setQuestions, incrementScore, updateUserClick } =
  categorySlice.actions;

export default categorySlice.reducer;
