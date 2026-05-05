import express from 'express';
import cors from 'cors';
import { personagensNaruto } from './entregavel.js';

const PORT = 8080;

const app = express(); 

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.json({hello:"world"});
});

app.get('/nomes', (req, res) => {
    const nomes = personagensNaruto.map(personagem => personagem.nome);
    res.json(nomes);
});

app.get('/menores-idade', (req, res) => {
    const menoresidade = personagensNaruto.filter(persogem => persogem.idade < 18 && p.ehDaFolha);
    res.json(menoresidade);
});

app.get('/somar-kekkei-genkai', (req, res) => {
    const somar = personagensNaruto.filter(p => p.possuiKekkeiGenkai).length;
    res.json({ total: somar });
});

app.get('/somar-chakra-jonin', (req, res) => {
    const chakra = personagensNaruto.filter(p => p.nivel === "Jonin").map(p =>p.chakra);
    res.json(chakra);
});

app.get('/resultado-chakra', (req, res) => {
    const somachakra = personagensNaruto.map(p => p.chakra).reduce((soma, valorAtual) => soma + valorAtual, 0)
    const media = somachakra / personagensNaruto.length
    const menoschakra = personagensNaruto.reduce((menor, atual) => atual.chakra < menor.chakra ? atual : menor)
    const maiorchakra = personagensNaruto.reduce((maior, atual) => atual.chakra > maior.chakra ? atual : maior)
    res.json({ "Chakra total": somachakra, "Média de chakra": media, "Personagem com menos chakra": menoschakra.nome, "Personagem com mais chakra": maiorchakra.nome });
});

app.get('/media-razao', (req,res) => {
    const apenasChunins = personagensNaruto.filter(p => p.nivel === "Chunin");
    const mediaRazao = apenasChunins.map(p => p.chakra/p.idade).reduce((soma, razao) => soma + razao, 0) / apenasChunins.length
    res.json({ "A razão média dos Chunins é:": mediaRazao })
})

app.get('/maior-menor-razao', (req,res) => {
    const maiorRazao = apenasChunins.map(p => p.chakra/p.idade).reduce((maior, atual) => atual.razao > maior.razao ? atual : maior);
    const menorRazao = apenasChunins.map(p => p.chakra/p.idade).reduce((menor, atual) => atual.razao < menor.razao ? atual : menor);
    res.json({ "Personagem com maior razão": maiorRazao.nome, "Personagem com menor razão": menorRazao.nome })
})

app.listen(PORT, () => 
    console.log(`Server listening on http://localhost:${PORT}`)
)