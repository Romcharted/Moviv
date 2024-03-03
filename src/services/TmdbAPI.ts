import axios, { AxiosResponse } from "axios";
import Movie from "@/models/Movie";
import i18n from "@/i18n";
import MovieList from "@/models/MovieList";

class TMDB {
    private apiKey: string;
    private baseUrl: string;
    private imgUrl: string;

    constructor() {
        this.apiKey = import.meta.env.VITE_TMDB_API_KEY || "";
        this.baseUrl = "https://api.themoviedb.org/3";
        this.imgUrl = "https://image.tmdb.org/t/p/original/";
    }

    async GetMovieDetails(movieId: number): Promise<Movie> {
        try {
            const response: AxiosResponse = await axios.get(
                `${this.baseUrl}/movie/${movieId}`,
                {
                    params: {
                        api_key: this.apiKey,
                        language: i18n.global.locale.value,
                    },
                }
            );
            return new Movie(response.data);
        } catch (error) {
            console.error("Error fetching movie details: " + error);
            throw error;
        }
    }

    async GetPopularMovies(): Promise<MovieList> {
        try {
            const response: AxiosResponse = await axios.get(
                `${this.baseUrl}/discover/movie`,
                {
                    params: {
                        api_key: this.apiKey,
                        language: i18n.global.locale.value,
                        include_adult: false,
                        include_video: false,
                        page: 1,
                        sort_by: "popularity.desc",
                    },
                }
            );

            const moviesData = response.data.results;

            const movies: Movie[] = moviesData.map(
                (movieData: any) => new Movie(movieData)
            );

            const popularMoviesList = new MovieList(
                0,
                "Popular Movies",
                movies
            );
            return popularMoviesList;
        } catch (error) {
            console.error("Error fetching popular movies: " + error);
            throw error;
        }
    }
}

export default TMDB;
