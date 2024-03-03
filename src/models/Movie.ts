import Genre from "@/models/Genre";

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
    private userAddDate: Date = new Date();
    private imgUrl = "https://image.tmdb.org/t/p/original/";

    constructor(data: any) {
        this.id = data.id || 0;
        this.title = data.title || "";
        this.overview = data.overview || "";
        this.status = data.status || "";
        this.voteCount = data.vote_count || 0;
        this.voteAverage = data.vote_average || 0;
        this.popularity = data.popularity || 0;
        this.runtime = data.runtime || 0;
        this.budget = data.budget || 0;
        this.revenue = data.revenue || 0;
        this.originalLanguage = data.original_language || "";
        this.releaseDate = data.release_date
            ? new Date(data.release_date)
            : new Date();
        this.backdropPath = this.imgUrl + data.backdrop_path || "";
        this.posterPath = this.imgUrl + data.poster_path || "";
        this.productionCompanies = data.production_companies || [];
        this.genres = data.genres || [];
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
        this.backdropPath = this.imgUrl + value;
    }

    public get PosterPath(): string {
        return this.posterPath;
    }

    public set PosterPath(value: string) {
        this.posterPath = this.imgUrl + value;
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

    public get UserAddDate(): Date {
        return this.userAddDate;
    }

    public set UserAddDate(value: Date) {
        this.userAddDate = value;
    }
}

export default Movie;
