import {TimestampedEntity} from "../../../interfaces/TimestampedEntity";

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

export interface MediaEntity extends MediaCsvImportRow, TimestampedEntity {
    id: number;
    importedAt?: Date;
    syncedAt?: Date;
}
