import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface FilterState {
	search: string;
	genre: string;
	year: string;
}
export type PartialFilterState = Partial<FilterState>;

const getInitialStateFromUrl = (): FilterState => {
	const query = new URLSearchParams(new URL(window.location.href).search);

	return {
		search: query.get('title') || '',
		genre: query.get('genre') || '',
		year: query.get('release_year') || '',
	};
};

const initialState = getInitialStateFromUrl();
console.log(initialState);

const getValue = (stateValue: string, inputValue?: string) => {
	if (typeof inputValue === 'string') {
		return inputValue;
	}
	return stateValue;
};

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		changeFilter(state, actions: PayloadAction<PartialFilterState>) {
			state.search = getValue(state.search, actions.payload.search);
			state.genre = getValue(state.genre, actions.payload.genre);
			state.year = getValue(state.year, actions.payload.year);
		},
	},
});

export const { changeFilter } = filterSlice.actions;
