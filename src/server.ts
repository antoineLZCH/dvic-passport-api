import App from './app';
import * as dotenv from 'dotenv';
const env = dotenv.config();

if(!env.error) {
    const app = new App(process.env.API_PORT);
    app.listen();
} else {
    throw env.error;
}