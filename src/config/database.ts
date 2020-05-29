import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const { DB_HOST, DB_PASSWORD, DB_NAME, DB_USER } = process.env;
const SERVER_ADDRESS = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

// @ts-ignore
mongoose.connect(SERVER_ADDRESS, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Database connected successfully');
})

export default mongoose;