import 'dotenv/config';
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('docs'));

app.listen(port, () => {
  console.log(`Server is running on port ${3000}`);
});
