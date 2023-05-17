import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.post('/auth/login', (req, res) => {
  const body = req.body;
  res
    .status(200)
    .send(JSON.stringify({ user: { name: 'oto', email: body.email } }));
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
