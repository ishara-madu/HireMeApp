// src/features/valuesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    values: [
        {
            title: 'Welcome to Hire Me',
            description:
                'Your go-to platform for hiring the best talent quickly and easily. Explore a variety of options to find the right employee for your needs.',
            image: require('@/assets/images/welcome-1.png'),
        },
        {
            title: 'Find the Best Employee',
            description:
                'Discover a wide range of skilled professionals ready to help you grow your business. From developers to designers, we have the perfect candidates for every role.',
            image: require('@/assets/images/welcome-2.png'),
        },
        {
            title: 'Sell Your Knowledge',
            description:
                "Share your expertise and earn by offering your skills to those who need them. Whether you're a consultant, freelancer, or expert in your field, start making an impact and income.",
            image: require('@/assets/images/welcome-3.png'),
        },
    ],
};

const valuesSlice = createSlice({
    name: 'values',
    initialState,
    reducers: {
        addValue: (state, action) => {
            state.values.push(action.payload);
        },
        removeValue: (state, action) => {
            state.values = state.values.filter((_, index) => index !== action.payload);
        },
    },
});

export const { addValue, removeValue } = valuesSlice.actions;
export default valuesSlice.reducer;
