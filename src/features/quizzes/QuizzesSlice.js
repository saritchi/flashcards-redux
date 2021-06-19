import { createSlice } from '@reduxjs/toolkit';
import { addQuizId } from '../topics/TopicsSlice';

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const {id, name, topicId, cardIds} = action.payload;
            state.quizzes[id] = {
                id: id,
                name: name,
                topicId: topicId,
                cardIds: cardIds
            }
        }
    }
})

export const addQuizThunk = (quiz) => {
    const {name, topicId, cardIds, id} = quiz;
    return (dispatch) => {
        dispatch(quizzesSlice.actions.addQuiz(quiz))
        dispatch(addQuizId({
            quizId: id,
            topicId: topicId
        }))
    }
}

export const selectQuizzes = state => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;