import Movie from "@/models/Movie";
import MovieList from "@/models/MovieList";

/**
 * Interface représentant les opérations disponibles sur les listes de films d'un utilisateur
 */
interface IListDAO {
    /**
     * Récupère toutes les listes de films de l'utilisateur
     * @param idUser L'ID de l'utilisateur
     * @returns Une promesse résolue avec un tableau de MovieList ou null en cas d'erreur
     */
    GetUserLists(idUser: number): Promise<MovieList[]>;

    /**
     * Ajoute un film à une liste de l'utilisateur
     * @param idUser L'ID de l'utilisateur
     * @param idMovie L'ID du film à ajouter
     * @param idList L'ID de la liste dans laquelle ajouter le film
     * @returns Une promesse résolue une fois l'opération terminée ou rejetée en cas d'erreur
     */
    AddMovieInList(
        idUser: number,
        idMovie: number,
        idList: number
    ): Promise<void>;

    /**
     * Supprime un film d'une liste de l'utilisateur
     * @param idUser L'ID de l'utilisateur
     * @param movieId L'ID du film à supprimer
     * @param idList L'ID de la liste dans laquelle supprimer le film
     * @returns Une promesse résolue une fois l'opération terminée ou rejetée en cas d'erreur
     */
    RemoveMovieFromList(
        idUser: number,
        movieId: number,
        idList: number
    ): Promise<void>;

    /**
     * Récupère une liste de films par son ID
     * @param idUser L'ID de l'utilisateur
     * @param id L'ID de la liste à récupérer
     * @returns Une promesse résolue avec la MovieList correspondante ou null si elle n'existe pas
     */
    GetListById(idUser: number, id: number): Promise<MovieList | null>;

    /**
     * Récupère une liste de films par son nom
     * @param idUser L'ID de l'utilisateur
     * @param name Le nom de la liste à récupérer
     * @returns Une promesse résolue avec la MovieList correspondante ou null si elle n'existe pas
     */
    GetListByName(idUser: number, name: string): Promise<MovieList | null>;

    /**
     * Récupère tous les films d'une liste donnée
     * @param idUser L'ID de l'utilisateur
     * @param idList L'ID de la liste dont on veut récupérer les films
     * @returns Une promesse résolue avec un tableau de Movie ou null en cas d'erreur
     */
    GetListMovies(idUser: number, idList: number): Promise<Movie[] | null>;
}

export default IListDAO;
