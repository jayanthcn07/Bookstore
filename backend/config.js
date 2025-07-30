import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 5000;
export const mongoDBURL = process.env.MONGO_URI;
