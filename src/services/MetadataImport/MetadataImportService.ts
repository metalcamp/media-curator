import {MediaCsvImportRow} from './dto/CsvImport';
import * as fs from 'fs';
import * as path from 'path';
import * as csv from '@fast-csv/parse';

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
                    console.log(results);
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
    ): Promise<Array<MediaCsvImportRow>> {
        return this.strategy.import(filename);
    }
}
