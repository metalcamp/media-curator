// eslint-disable-next-line node/no-unsupported-features/es-syntax
export interface MediaCsvImportRow {
    filepath: string;
    title: string;
    artist: string;
    album: string;
    year: string;
    genre: string;
    rating?: string;
    grouping?: string;
    mood?: string;
}

// eslint-disable-next-line node/no-unsupported-features/es-syntax
export interface MediaEntity extends MediaCsvImportRow {
    id: number;
}
