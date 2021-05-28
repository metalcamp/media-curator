interface RedisConfig {
    port: number;
    host: string;
    password?: string;
}

const config: RedisConfig = {
    port: parseInt(process.env.REDIS_PORT || '6789'),
    host: process.env.REDIS_HOST || '127.0.0.1',
};

// TODO fix eslint config
// eslint-disable-next-line node/no-unsupported-features/es-syntax
export default config;
