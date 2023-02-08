import { config } from './config';

export const getTrendingMovies = async () => {
	try {
		const response = await fetch(
			`${config.API_URL}/trending/movie/week?api_key=${config.API_KEY}`
		);

		if (response.ok) {
			const data = await response.json();
			return {
				data: data.results,
				error: null
			};
		} else {
			return {
				data: null,
				error: 'Something went wrong'
			};
		}
	} catch (error) {
		return {
			data: null,
			error: error.message
		};
	}
};

export const getPopularMovies = async page => {
	console.log(config.POPULAR_MOVIES + page);
	try {
		const response = await fetch(config.POPULAR_MOVIES + page);
		const data = await response.json();
		if (response.ok) {
			return {
				data: data.results,
				error: null
			};
		} else {
			return {
				data: null,
				error: 'Something went wrong'
			};
		}
	} catch (error) {
		return {
			data: null,
			error: error.message
		};
	}
};

export const getTopRatedMovies = async page => {
	try {
		const response = await fetch(config.TOP_RATED_MOVIES + page);
		const data = await response.json();
		if (response.ok) {
			return {
				data: data.results,
				error: null
			};
		} else {
			return {
				data: null,
				error: 'Something went wrong'
			};
		}
	} catch (error) {
		return {
			data: null,
			error: error.message
		};
	}
};

export const getPopularSeries = async () => {
	try {
		const response = await fetch(
			`${config.API_URL}/trending/tv/week?api_key=${config.API_KEY}`
		);

		if (response.ok) {
			const data = await response.json();
			return {
				data: data.results,
				error: null
			};
		} else {
			return {
				data: null,
				error: 'Something went wrong'
			};
		}
	} catch (error) {
		return {
			data: null,
			error: error.message
		};
	}
};

export const getTopRatedSeries = async () => {
	try {
		const response = await fetch(
			`${config.API_URL}/tv/top_rated?api_key=${config.API_KEY}`
		);

		if (response.ok) {
			const data = await response.json();
			return {
				data: data.results,
				error: null
			};
		} else {
			return {
				data: null,
				error: 'Something went wrong'
			};
		}
	} catch (error) {
		return {
			data: null,
			error: error.message
		};
	}
};

export const getGenres = async () => {
	try {
		const response = await fetch(
			`https://api.themoviedb.org/3/genre/movie/list?api_key=ce742173023d2188458fe422a051acb0&language=en-US`
		);

		if (response.ok) {
			const data = await response.json();
			return {
				data: data.genres,
				error: null
			};
		} else {
			return {
				data: null,
				error: 'Something went wrong'
			};
		}
	} catch (error) {
		return {
			data: null,
			error: error.message
		};
	}
};
