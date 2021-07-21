const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const baseRouter = require('./controllers/base');
const attacksRouter = require('./controllers/attacks');

const app = express();

dotenv.config();

console.log(`Connecting to MongoDB cluster...`);

mongoose
	.connect(process.env.MONGO_URI, {
		useCreateIndex: true,
		useFindAndModify: false,
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log(`Connection to MongoDB established.`))
	.catch((error) => console.error(error.message));

app.use(express.json());
app.use('/api/base', baseRouter);
app.use('/api/attacks', attacksRouter);

app.get('/', (req, res) => res.send('Base url!'));

app.listen(process.env.PORT, () =>
	console.log(`App running on port ${process.env.PORT}`)
);
