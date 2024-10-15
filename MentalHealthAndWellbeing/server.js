import express from 'express';
import cors from 'cors';
import { sendEmail } from './sendgridEmail.js';

const app = express();
app.use(cors());

app.use(express.json());

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello from Node.js!');
});

app.post('/sendEmail', (req,res) =>{
    const{email, subject, message} = req.body;
    sendEmail(email, subject, message);
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});