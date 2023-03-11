import path from 'path';
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

type serverConfig = {
    port: number,
    dbUri: string
}
const customConfig: serverConfig = {
    port: 8000,
    dbUri: process.env.DATABASE_URL as string,
};

export default customConfig;
