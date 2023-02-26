import NavBar from './components/NavBar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import SeriesPage from './pages/SeriesPage';

const router = createBrowserRouter([
	{ path: '/', element: <HomePage /> },
	{ path: '/movies', element: <MoviesPage /> },
	{ path: '/series', element: <SeriesPage /> }
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
