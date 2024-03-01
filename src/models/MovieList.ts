import Movie from "@/models/Movie";

/**
 * Classe représentant une liste d'un utilisateur qui contient des films
 */
class MovieList {
    private id: number;
    private name: string;
    private movies: Movie[];

    constructor(id: number, name: string, movies: Movie[]) {
        this.id = id;
        this.name = name;
        this.movies = movies;
    }

    public get Id(): number {
        return this.id;
    }

    public get Name(): string {
        return this.name;
    }

    public SetMovies(movies: Movie[]): void {
        this.movies = movies;
    }

    /**
     * Méthode pour trier les films par titre
     *
     * @param ascending boolean pour savoir le sens de trie
     */
    sortMoviesByTitle(ascending: boolean = true): void {
        this.movies.sort((a, b) => {
            const compare = a.Title.localeCompare(b.Title);
            return ascending ? compare : -compare;
        });
    }

    /**
     * Méthode pour trier les films par popularité
     *
     * @param ascending boolean pour savoir le sens de trie
     */
    sortMoviesByPopularity(ascending: boolean = false): void {
        this.movies.sort((a, b) => {
            const compare = b.Popularity - a.Popularity;
            return ascending ? compare : -compare;
        });
    }

    /**
     * Méthode pour trier les films par note moyenne
     *
     * @param ascending boolean pour savoir le sens de trie
     */
    sortMoviesByVoteAverage(ascending: boolean = false): void {
        this.movies.sort((a, b) => {
            const compare = b.VoteAverage - a.VoteAverage;
            return ascending ? compare : -compare;
        });
    }

    /**
     * Méthode pour trier les films par date de sortie
     *
     * @param ascending boolean pour savoir le sens de trie
     */
    sortMoviesByReleaseDate(ascending: boolean = true): void {
        this.movies.sort((a, b) => {
            const compare = a.ReleaseDate.getTime() - b.ReleaseDate.getTime();
            return ascending ? compare : -compare;
        });
    }

    /**
     * Méthode pour trier les films par date d'ajout dans la liste
     *
     * @param ascending boolean pour savoir le sens de trie
     */
    sortMoviesByUserAddDate(ascending: boolean = true): void {
        this.movies.sort((a, b) => {
            const compare = a.UserAddDate.getTime() - b.UserAddDate.getTime();
            return ascending ? compare : -compare;
        });
    }
}

export default MovieList;
