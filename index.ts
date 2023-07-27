import express from 'express';
import urlRouter from './routes/url-routes'
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/url', urlRouter);

// Server Setup
const PORT = 3333;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});