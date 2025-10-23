import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json()); // API aceita JSON

mongoose.connect(process.env.MONGODB_URI, { dbName: 'Aula' })
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.error('Erro ao conectar ao MongoDB', err));

const alunosSchema = new mongoose.Schema({
  nome: { type: String, required: true, trim: true, minlength: 2 },
  idade: { type: Number, required: true, min: 0, max: 120 },
  curso: { type: String, required: true, trim: true },
  notas: { type: [Number], default: [], validate: v => v.every(n => n >= 0 && n <= 10) }
}, { collection: 'Alunos', timestamps: true });
const Aluno = mongoose.model('Aluno', alunosSchema, 'Alunos');

// Rotas inicial
app.get('/', async(req, res) => res.json({ msg: 'API rodando'}));

//Criar aluno
app.post('/alunos', async (req, res) => {
    const alunos = await Aluno.create(req.body);
    res.status(201).json(alunos);
});

// Listar alunos
app.get('/alunos', async (req, res) => {
    const alunos = await Aluno.find();
    res.json(alunos);
});

// Iniciar servidor
app.listen(process.env.PORT, () => 
    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`)
);