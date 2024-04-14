class Settings {
    private _theme: string;
    private _language: string;
    private _notificationEnabled: boolean;

    constructor(theme: string, language: string, notificationEnabled: boolean) {
        this._theme = theme;
        this._language = language;
        this._notificationEnabled = notificationEnabled;
    }

    public get theme(): string {
        return this._theme;
    }

    public get language(): string {
        return this._language;
    }

    public get notificationEnabled(): boolean {
        return this._notificationEnabled;
    }

    public setTheme(theme: string): void {
        this._theme = theme;
    }

    public setLanguage(language: string): void {
        this._language = language;
    }

    public setNotificationEnabled(notificationEnabled: boolean): void {
        this._notificationEnabled = notificationEnabled;
    }

    // Méthode pour convertir les paramètres en objet JSON
    public toJSON(): any {
        return {
            theme: this._theme,
            language: this._language,
            notificationEnabled: this._notificationEnabled,
        };
    }

    // Méthode pour créer une instance Settings à partir d'un objet JSON
    public static fromJSON(json: any): Settings {
        return new Settings(
            json.theme || "light-theme",
            json.language || "en",
            json.notificationEnabled || false
        );
    }
}

export default Settings;
