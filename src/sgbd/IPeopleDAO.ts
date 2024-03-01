import Movie from "@/models/Movie";
import { People } from "@/models/People";

/**
 * Interface pour la gestion des personnes (acteurs, réalisateurs, etc.)
 */
interface IPeopleDAO {
    /**
     * Méthode pour récupérer les informations d'une personne par son ID
     * @param id L'ID de la personne à récupérer
     * @returns Une promesse qui résout avec les informations de la personne ou null si la personne n'est pas trouvée
     */
    getPeopleById(id: number): Promise<People | null>;

    /**
     * Méthode pour récupérer les personnes populaires
     * @returns Une promesse qui résout avec un tableau de personnes populaires
     */
    getPopularPeople(): Promise<People[]>;

    /**
     * Méthode pour récupérer les crédits de films d'une personne par son ID
     * @param id L'ID de la personne pour laquelle récupérer les crédits de films
     * @returns Une promesse qui résout avec un tableau de films crédités à cette personne
     */
    getMovieCreditsById(id: number): Promise<Movie[]>;
}

export default IPeopleDAO;
