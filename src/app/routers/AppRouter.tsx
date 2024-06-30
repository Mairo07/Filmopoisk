import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../layoute/Layout';
import { MainPage } from '../../pages/mainPage/MainPage';
import { MoviePage } from '../../pages/moviePage/MoviePage';
export const AppRouter = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <h1>Ошибка</h1>,
		children: [
			{
				index: true,
				element: <MainPage />,
			},
			{
				path: 'movie/:id',
				element: <MoviePage />,
			},
		],
	},
]);
