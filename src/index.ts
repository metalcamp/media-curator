import 'reflect-metadata';
import { createConnection } from 'typeorm';

if (process.env.NODE_ENV !== 'production') {
    const dotenv = require('dotenv');
    dotenv.config();
}

import typeormConfig from "./config/TypeormConfig";
import {MetadataImportService} from "./services/MetadataImport/MetadataImportService";

createConnection(
    typeormConfig
)
    .then(() => {
    })
    .catch((error) => console.log(error));

console.time('import');

const importService = new MetadataImportService();
importService.importFromFile()
    .then(() => console.timeEnd('import'));
