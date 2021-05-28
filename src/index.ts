// import {App} from "./app";
import {MetadataImportService} from "./services/MetadataImport/MetadataImportService";

// const app = new App();
// app.listen();

const importService = new MetadataImportService();
importService.importFromFile()
