import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || "localhost";
const PROTOCOL = process.env.PROTOCOL || "http";
const DEEPL_AUTH_KEY = process.env.DEEPL_AUTH_KEY || null;
export { PORT, HOST, PROTOCOL, DEEPL_AUTH_KEY };
