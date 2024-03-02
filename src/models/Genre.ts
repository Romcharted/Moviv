/**
 * Représente un genre d'un film
 */
class Genre {
    private _id: number;
    private _name: string;

    constructor(id: number, name: string) {
        this._id = id;
        this._name = name;
    }

    public get Id(): number {
        return this._id;
    }

    public set Id(value: number) {
        this._id = value;
    }

    public get Name(): string {
        return this._name;
    }

    public set Name(value: string) {
        this._name = value;
    }
}
