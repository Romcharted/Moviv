import Movie from "@/models/Movie";

/**
 * Interface pour accéder aux données des films
 */
interface IMovieDAO {
    /**
     * Méthode pour récupérer un film par son identifiant
     *
     * @param id L'id du film
     */
    GetMovieById(id: number): Promise<Movie | null>;

    /**
     * Méthode pour récupérer la liste des films populaires
     */
    GetPopularMovies(): Promise<Movie[]>;

    /**
     * Méthode pour rechercher des films par mot-clé
     * @param query
     */
    SearchMovies(query: string): Promise<Movie[]>;

    /**
     * Méthode pour récupérer les 100 films les plus populaires
     */
    GetTopRatedMovies(): Promise<Movie[]>;

    /**
     * Méthode pour récupérer les films qui vont bientôt sortir
     */
    GetUpComingMovies(): Promise<Movie[]>;
}

export default IMovieDAO;
