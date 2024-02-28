// Enum pour le genre d'une personne
enum GenderPeople {
    NotSpecified = 0,
    Female = 1,
    Male = 2,
    NonBinary = 3,
}

/**
 * Représente une personne
 */
class People {
    private id: number = 0;
    private name: string = "";
    private birthday: Date = new Date();
    private deathday: Date | null = null;
    private biography: string = "";
    private placeOfBirth: string = "";
    private popularity: number = 0;
    private gender: GenderPeople = GenderPeople.NotSpecified;
    private profilePath: string = "";

    constructor(data: any) {
        const keys = Object.keys(data).filter((key) => key in this);

        keys.forEach((key: any) => {
            if (key === "birthday" || key === "deathday") {
                // Converti la date au format Date
                (this as any)[key] = new Date(data[key]);
            } else if (key === "gender") {
                // Vérifie que la valeur correspond à une des valeurs de l'énumération
                if (Object.values(GenderPeople).includes(data[key])) {
                    (this as any)[key] = data[key];
                }
            } else {
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

    public get Name(): string {
        return this.name;
    }

    public set Name(value: string) {
        this.name = value;
    }

    public get Birthday(): Date {
        return this.birthday;
    }

    public set Birthday(value: Date) {
        this.birthday = value;
    }

    public get Deathday(): Date | null {
        return this.deathday;
    }

    public set Deathday(value: Date | null) {
        this.deathday = value;
    }

    public get Biography(): string {
        return this.biography;
    }

    public set Biography(value: string) {
        this.biography = value;
    }

    public get PlaceOfBirth(): string {
        return this.placeOfBirth;
    }

    public set PlaceOfBirth(value: string) {
        this.placeOfBirth = value;
    }

    public get Popularity(): number {
        return this.popularity;
    }

    public set Popularity(value: number) {
        this.popularity = value;
    }

    public get Gender(): GenderPeople {
        return this.gender;
    }

    public set Gender(value: GenderPeople) {
        this.gender = value;
    }

    public get ProfilePath(): string {
        return this.profilePath;
    }

    public set ProfilePath(value: string) {
        this.profilePath = value;
    }
}

export { People, GenderPeople };
