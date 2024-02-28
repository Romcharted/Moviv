/**
 * Représente un film
 */
class Movie {
    private id: number = 0;
    private title: string = "";
    private overview: string = "";
    private status: string = "";
    private voteCount: number = 0;
    private voteAverage: number = 0;
    private popularity: number = 0;
    private runtime: number = 0;
    private budget: number = 0;
    private revenue: number = 0;
    private originalLanguage: string = "";
    private releaseDate: Date = new Date();
    private backdropPath: string = "";
    private posterPath: string = "";
    private productionCompanies: number[] = [];
    private genres: Genre[] = [];

    constructor(data: any) {
        // Filtre les clés de l'objet data pour correspondre aux propriétés de la classe Movie
        const keys = Object.keys(data).filter((key) => key in this);

        keys.forEach((key: any) => {
            // Si la clé est "release_date", conversion de la valeur en objet Date
            if (key === "release_date") {
                this.releaseDate = new Date(data[key]);
            } else {
                // Sinon, affectation de la valeur à la propriété correspondante
                (this as any)[key] = data[key];
            }
        });
    }

    public get Id(): number {
        return this.id;
    }

    public set Id(value: number) {
        this.id = value;
    }

    public get Title(): string {
        return this.title;
    }

    public set Title(value: string) {
        this.title = value;
    }

    public get Overview(): string {
        return this.overview;
    }

    public set Overview(value: string) {
        this.overview = value;
    }

    public get Status(): string {
        return this.status;
    }

    public set Status(value: string) {
        this.status = value;
    }

    public get VoteCount(): number {
        return this.voteCount;
    }

    public set VoteCount(value: number) {
        this.voteCount = value;
    }

    public get VoteAverage(): number {
        return this.voteAverage;
    }

    public set VoteAverage(value: number) {
        this.voteAverage = value;
    }

    public get Popularity(): number {
        return this.popularity;
    }

    public set Popularity(value: number) {
        this.popularity = value;
    }

    public get Runtime(): number {
        return this.runtime;
    }

    public set Runtime(value: number) {
        this.runtime = value;
    }

    public get Budget(): number {
        return this.budget;
    }

    public set Budget(value: number) {
        this.budget = value;
    }

    public get Revenue(): number {
        return this.revenue;
    }

    public set Revenue(value: number) {
        this.revenue = value;
    }

    public get OriginalLanguage(): string {
        return this.originalLanguage;
    }

    public set OriginalLanguage(value: string) {
        this.originalLanguage = value;
    }

    public get ReleaseDate(): Date {
        return this.releaseDate;
    }

    public set ReleaseDate(value: Date) {
        this.releaseDate = value;
    }

    public get BackdropPath(): string {
        return this.backdropPath;
    }

    public set BackdropPath(value: string) {
        this.backdropPath = value;
    }

    public get PosterPath(): string {
        return this.posterPath;
    }

    public set PosterPath(value: string) {
        this.posterPath = value;
    }

    public get ProductionCompanies(): number[] {
        return this.productionCompanies;
    }

    public set ProductionCompanies(value: number[]) {
        this.productionCompanies = value;
    }

    public get Genres(): Genre[] {
        return this.genres;
    }

    public set Genres(value: Genre[]) {
        this.genres = value;
    }
}

export default Movie;
