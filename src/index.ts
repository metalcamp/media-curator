// import {App} from "./app";
// import {MetadataImportService} from "./services/MetadataImport/MetadataImportService";
import 'reflect-metadata';
import { createConnection } from 'typeorm';

if (process.env.NODE_ENV !== 'production') {
    const dotenv = require('dotenv');
    dotenv.config();
}

import typeormConfig from "./config/TypeormConfig";

// const app = new App();
// app.listen();

createConnection(
    typeormConfig
)
    .then(() => {
        console.log('aok');
    })
    .catch((error) => console.log(error));

// const importService = new MetadataImportService();
// importService.importFromFile()
