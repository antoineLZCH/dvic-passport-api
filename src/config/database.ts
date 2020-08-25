import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const { DB_ENDPOINT } = process.env;
const SERVER_ADDRESS = DB_ENDPOINT;

// @ts-ignore
mongoose.connect(SERVER_ADDRESS, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Database connected successfully');
})

export default mongoose;