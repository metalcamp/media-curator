import {Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import {MediaCsvImportRow, MediaEntity} from "../services/MetadataImport/dto/CsvImport";
import {TimestampedBaseEntity} from "./TimestampedBaseEntity";

@Entity({name: 'media_files'})
export class MediaFileEntity extends TimestampedBaseEntity implements MediaEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column('text')
    filepath!: string;

    @Column('text')
    title!: string;

    @Column('text')
    artist!: string;

    @Column('text')
    album!: string;

    @Column('text')
    year!: string;

    @Column('text')
    genre!: string;

    @Column('text', {nullable: true})
    rating?: string;

    @Column('text', {nullable: true})
    grouping?: string;

    @Column('text', {nullable: true})
    mood?: string;

    @Column('jsonb', {nullable: true, name: 'old_data'})
    oldData?: MediaCsvImportRow;

    @Column({nullable: true, name: 'imported_at'})
    importedAt?: Date

    @Column({nullable: true, name: 'synced_at'})
    syncedAt?: Date
}
