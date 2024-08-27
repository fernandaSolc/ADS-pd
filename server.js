// server.js
import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';

const app = express();
const uri = "mongodb+srv://joaocardoso:projeto@cluster0.e0glp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);

app.use(cors());
app.use(express.json());

app.get('/data', async (req, res) => {
    try {
        await client.connect();
        const database = client.db('Loja');
        const collection = database.collection('Produtos');
        const data = await collection.find({}).toArray();
        res.json(data);
    } catch (err) {
        console.error('Erro ao buscar dados:', err);
        res.status(500).send('Erro ao buscar dados');
    } finally {
        await client.close();
    }
});

app.get('/funcionarios', async (req, res) => {
    try {
        await client.connect();
        const database = client.db('Funcionarios');
        const collection = database.collection('Funcionarios');
        const data = await collection.find({}).toArray();
        res.json(data);
    } catch (err) {
        console.error('Erro ao buscar dados:', err);
        res.status(500).send('Erro ao buscar dados');
    } finally {
        await client.close();
    }
});

app.post('/data', async (req, res) => {
    try {

        await client.connect();
        const database = client.db('Loja');
        const collection = database.collection('Produtos');
        const newItem = req.body; // Dados enviados no corpo da requisição
        const result = await collection.insertOne(newItem);
        res.status(201).json(result); // Retorna o resultado da inserção

    } catch (err) {
        console.error('Erro ao adicionar dados:', err);
        res.status(500).send('Erro ao adicionar dados');
    } finally {
        await client.close();
    }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
