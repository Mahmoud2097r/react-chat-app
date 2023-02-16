import { config } from 'dotenv';
config();

import express from 'express';
import cors from 'cors';
import { usersRouter } from './routes/users';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ origin: process.env.CLIENT_URL }));

app.use('/', usersRouter);

app.listen(process.env.PORT, () =>
	console.log(`http://localhost:${process.env.PORT}`),
);
