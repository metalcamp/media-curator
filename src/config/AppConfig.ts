interface AppConfig {
    env: string;
    port: number;
}

const config: AppConfig = {
    env: process.env.NODE_ENV || 'production',
    port: parseInt(process.env.PORT || '3000'),
}

// eslint-disable-next-line node/no-unsupported-features/es-syntax
export default config;
