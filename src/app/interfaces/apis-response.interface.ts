export interface ApisResponse {
    count:   number;
    entries: Entry[];
}

export interface Entry {
    index:      number;
    API:         string;
    Description: string;
    Link:        string;
    Category:    string;
}
