import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { moviesApi } from '../shared/api/moviesApi';
import { modalSlice } from '../shared/module/modal/modalSlice';
import { authSlice } from '../shared/module/auth/authSlice';
import { filterSlice } from '../shared/module/filter/filterSlice';

export const store = configureStore({
	reducer: {
		[moviesApi.reducerPath]: moviesApi.reducer,
		[modalSlice.name]: modalSlice.reducer,
		[authSlice.name]: authSlice.reducer,
		[filterSlice.name]: filterSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(moviesApi.middleware),
});

setupListeners(store.dispatch);
