import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface AuthState {
	token: string | null;
}

const initialState: AuthState = {
	token: localStorage.getItem('token') || null,
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		setToken(state, actions: PayloadAction<string>) {
			state.token = actions.payload;
		},
		logout(state) {
			state.token = null;
		},
	},
});

export const { setToken, logout } = authSlice.actions;
