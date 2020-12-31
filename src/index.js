import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';

import routes from './routes';

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// mount routes
app.use('/api', routes);

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`app listening on ${PORT}`);
});
