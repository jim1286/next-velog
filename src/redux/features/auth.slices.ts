import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: '',
    isloginModalOpen: false,
    issignupModalOpen: false,
    isLogined: false,
};

export const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authEmail: (state, action) => {
            state.email = action.payload;
        },
        isloginModalOpen: (state, action) => {
            state.isloginModalOpen = action.payload;
        },
        issignupModalOpen: (state, action) => {
            state.issignupModalOpen = action.payload;
        },
        isLogined: (state, action) => {
            state.isLogined = action.payload;
        },
    },
});

// 로그인 및 회원가입 모달 isOpen 추가

export const { authEmail, isloginModalOpen, issignupModalOpen, isLogined } = auth.actions;
export default auth.reducer;
