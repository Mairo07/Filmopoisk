import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../../constans/urls';
import { setToken } from '../../shared/module/auth/authSlice';

export interface IFormData {
	login: string;
	password: string;
}

export const loginThunk = createAsyncThunk(
	'auth/loginThunk',
	async (data: IFormData, thunkAPI) => {
		try {
			console.log(data);
			const { token }: { token: string } = await fetch(`${BASE_URL}login`, {
				method: 'POST',
				body: JSON.stringify({ username: data.login, password: data.password }),
			}).then((v) => v.json());
			if (token) {
				thunkAPI.dispatch(setToken(token));
				return token;
			}
		} catch (error) {
			console.log(`Не удалось получить токен. Ошибка: ${error}`);
		}
	}
);
