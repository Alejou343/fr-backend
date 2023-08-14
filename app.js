const express = require('express');
const app = express();
const port = 3000;

const questions = [
    {
        "pregunta": "¿Cuál es el río más largo del mundo?",
        "opciones": [
            {"text": "Nilo", "isCorrect": true},
            {"text": "Amazonas", "isCorrect": false},
            {"text": "Yangtsé", "isCorrect": false},
            {"text": "Mississippi", "isCorrect": false}
        ]
    },
    {
        "pregunta": "¿En qué año comenzó la Primera Guerra Mundial?",
        "opciones": [
            {"text": "1914", "isCorrect": true},
            {"text": "1939", "isCorrect": false},
            {"text": "1905", "isCorrect": false},
            {"text": "1918", "isCorrect": false}
        ]
    },
    {
        "pregunta": "¿Cuál es el símbolo químico del oro?",
        "opciones": [
            {"text": "Ag", "isCorrect": false},
            {"text": "Au", "isCorrect": true},
            {"text": "Fe", "isCorrect": false},
            {"text": "Hg", "isCorrect": false}
        ]
    },
    {
        "pregunta": "¿Cuál es el planeta más grande del sistema solar?",
        "opciones": [
            {"text": "Venus", "isCorrect": false},
            {"text": "Marte", "isCorrect": false},
            {"text": "Júpiter", "isCorrect": true},
            {"text": "Saturno", "isCorrect": false}
        ]
    },
    {
        "pregunta": "¿Quién escribió la obra 'Don Quijote de la Mancha'?",
        "opciones": [
            {"text": "Gabriel García Márquez", "isCorrect": false},
            {"text": "Miguel de Cervantes", "isCorrect": true},
            {"text": "Pablo Neruda", "isCorrect": false},
            {"text": "Mario Vargas Llosa", "isCorrect": false}
        ]
    },
    {
        "pregunta": "¿Cuál es el metal más abundante en la corteza terrestre?",
        "opciones": [
            {"text": "Hierro", "isCorrect": true},
            {"text": "Aluminio", "isCorrect": false},
            {"text": "Cobre", "isCorrect": false},
            {"text": "Oro", "isCorrect": false}
        ]
    },
    {
        "pregunta": "¿Cuál es el océano más grande del mundo?",
        "opciones": [
            {"text": "Atlántico", "isCorrect": false},
            {"text": "Pacífico", "isCorrect": true},
            {"text": "Índico", "isCorrect": false},
            {"text": "Ártico", "isCorrect": false}
        ]
    },
    {
        "pregunta": "¿Cuál es la montaña más alta del mundo?",
        "opciones": [
            {"text": "Monte Kilimanjaro", "isCorrect": false},
            {"text": "Monte Everest", "isCorrect": true},
            {"text": "Monte McKinley", "isCorrect": false},
            {"text": "Monte Fuji", "isCorrect": false}
        ]
    },
    {
        "pregunta": "¿En qué país se encuentra la torre de Pisa?",
        "opciones": [
            {"text": "Italia", "isCorrect": true},
            {"text": "Francia", "isCorrect": false},
            {"text": "España", "isCorrect": false},
            {"text": "Grecia", "isCorrect": false}
        ]
    },
    {
        "pregunta": "¿Cuál es el proceso natural que permite a las plantas producir su alimento?",
        "opciones": [
            {"text": "Fotosíntesis", "isCorrect": true},
            {"text": "Respiración", "isCorrect": false},
            {"text": "Digestión", "isCorrect": false},
            {"text": "Transpiración", "isCorrect": false}
        ]
    }
]   

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.get('/api/questions', (req, res) => {
    res.send(questions)
})

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});

