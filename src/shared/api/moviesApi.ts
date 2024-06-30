import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../../constans/urls';
import { ShortMovieInfo } from './types';

export interface SearchResponse {
	search_result: ShortMovieInfo[];
	total_pages: number;
}

type Actor = {
	name: string;
	photo: string; // base64 img
};

type FullMovieInfo = {
	id: string;
	title: string;
	description: string;
	release_year: number;
	poster: string; //base64 img
	genre: string;
	rating: string; //float
	total_rates_count: string; //int
	actors: Actor[];
};

export const moviesApi = createApi({
	reducerPath: 'moviesApi',
	baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
	endpoints: (builder) => ({
		getMoviesList: builder.query<SearchResponse, string | undefined>({
			query: (searchParams) => {
				console.log('searchParams', searchParams);

				return `search${searchParams || ''}`;
			},
		}),
		getMovieById: builder.query<FullMovieInfo, string>({
			query: (id) => `movie/${id}`,
		}),
	}),
});

export const {
	useGetMoviesListQuery,
	useGetMovieByIdQuery,
	useLazyGetMovieByIdQuery,
} = moviesApi;
