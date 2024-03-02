import Movie from "@/models/Movie";
import IMovieDAO from "@/sgbd/IMovieDAO";
import TMDB from "@/services/TmdbAPI";
import MovieList from "@/models/MovieList";

class MovieApiDAO implements IMovieDAO {
    private api: TMDB;

    constructor() {
        this.api = new TMDB();
    }

    async GetMovieById(id: number): Promise<Movie | null> {
        try {
            return await this.api.GetMovieDetails(id);
        } catch (error) {
            console.error("Error fetching movie details: " + error);
            return null;
        }
    }

    GetPopularMovies(): Promise<MovieList> {
        return this.api.GetPopularMovies();
    }

    SearchMovies(query: string): Promise<MovieList> {
        throw new Error("Method not implemented.");
    }
    GetTopRatedMovies(): Promise<MovieList> {
        throw new Error("Method not implemented.");
    }
    GetUpComingMovies(): Promise<MovieList> {
        throw new Error("Method not implemented.");
    }
}
