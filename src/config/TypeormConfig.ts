import {ConnectionOptions} from "typeorm";

type TypeormConfig = ConnectionOptions;

const config: TypeormConfig = {
    type: 'postgres',
    logging: process.env.TYPEORM_LOGGING === 'true',
    entities: [process.env.TYPEORM_ENTITIES || ''],
    host: process.env.TYPEORM_HOST,
    port: 5432,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    extra: {
        max: parseInt(process.env.TYPEORM_CONNECTIONS || '10', 10),
    }
}

export default config;
