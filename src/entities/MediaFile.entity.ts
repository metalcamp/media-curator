import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";
import {MediaCsvImportRow, MediaEntity} from "../services/MetadataImport/dto/CsvImport";

@Entity({name: 'media_files'})
export class MediaFileEntity extends BaseEntity implements MediaEntity {
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

    @Column('jsonb', {nullable: true})
    oldData?: MediaCsvImportRow;

}
