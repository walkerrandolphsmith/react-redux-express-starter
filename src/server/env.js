const DEFAULT_HOST = 'localhost';
const {
    VERSION_NUMBER,
    NODE_ENV,
    HOST, PORT,
    DEV_HOST, DEV_PORT,
    API_HOST, API_PORT,
    MONDO_URI,
    MAILGUN_API_KEY, MAILGUN_DOMAIN
} = process.env;

export const isBrowser = process.browser;
export const nodeEnv = NODE_ENV || 'production';
export const versionNumber = VERSION_NUMBER;
export const host = HOST || DEFAULT_HOST;
export const port = PORT || 3000;
export const devHost = DEV_HOST || DEFAULT_HOST;
export const devPort = DEV_PORT || 3001;
export const apiHost = API_HOST || DEFAULT_HOST;
export const apiPort = API_PORT || 3002;
export const mongoUri = MONDO_URI || 'mongodb://localhost/starter';
export const mailgunApiKey = MAILGUN_API_KEY;
export const mailgunDomain = MAILGUN_DOMAIN;