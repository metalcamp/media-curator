import {MediaCsvImportRow} from './dto/CsvImport';
import * as fs from 'fs';
import * as path from 'path';
import * as csv from '@fast-csv/parse';
import {MediaFileRepository} from "../../repository/MediaFileRepository";
import {MediaFileEntity} from "../../entities/MediaFileEntity";

interface MetadataImportStrategy {
    import(filename: string): Promise<Array<MediaCsvImportRow>>;
}

class CSVFileImportStrategy implements MetadataImportStrategy {
    async import(filename: string): Promise<Array<MediaCsvImportRow>> {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        return new Promise((resolve, _reject) => {
            const results: any = [];

            const stream = fs.createReadStream(
                path.resolve(__dirname, '../../../public', filename),
            );

            stream
                .pipe(
                    csv.parse({
                        headers: (headers) => headers.map((h) => h?.toLowerCase()),
                    }),
                )
                .on('error', (error) => console.log(error))
                .on('data', (row) => {
                    results.push(row);
                })
                .on('end', () => {
                    resolve(results);
                });
        });
    }
}

export class MetadataImportService {
    private strategy: MetadataImportStrategy;

    public constructor(importStrategy = new CSVFileImportStrategy()) {
        this.strategy = importStrategy;
    }

    // TODO remove default filename
    async importFromFile(
        filename = 'import.csv',
    ): Promise<void> {
        const meta = await this.strategy.import(filename) as unknown as MediaFileEntity[];

        const repo = new MediaFileRepository();
        await repo.store(meta);
    }
}
