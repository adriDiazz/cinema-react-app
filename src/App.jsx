import NavBar from './components/NavBar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import SeriesPage from './pages/SeriesPage';
import MoviePage from './pages/MoviePage';

const router = createBrowserRouter([
	{ path: '/', element: <HomePage /> },
	{ path: '/movies', element: <MoviesPage /> },
	{ path: '/series', element: <SeriesPage /> },
	{ path: '/movie/:id', element: <MoviePage /> },
	{ path: '*', element: <h1>404</h1> }
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
