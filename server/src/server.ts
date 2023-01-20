import express, { Request, response, Response } from 'express';
const app = express();

app.use(express.json());

app.use('/ping', (req: Request, res: Response) => {
  res.status(200).send("Hello world!!");
});

app.use('*', (req: Request, res: Response) => {
  res.status(200).send("Not found: Invalid route")
});

app.listen(2020, () => console.log('\n⚪️ :: Server running on port 2020'));