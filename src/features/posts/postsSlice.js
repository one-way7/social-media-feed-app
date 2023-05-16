import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post!', content: 'More text' },
];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded(state, action) {
            state.push(action.payload);
        },
        postUpdated(state, action) {
            const { id, title, content } = action.payload;
            const currentPost = state.find((post) => post.id === id);

            if (currentPost) {
                currentPost.title = title;
                currentPost.content = content;
            }
        },
    },
});

const { reducer, actions } = postsSlice;

export const { postAdded, postUpdated } = actions;
export default reducer;
