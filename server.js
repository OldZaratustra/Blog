const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Sirve archivos estáticos (HTML, CSS, JS)

// Simulación de base de datos
const piecesDatabase = {
    "ABC123": {
        code: "ABC123",
        description: "Esta es una pieza de muestra con detalles específicos del producto.",
        manufacturer: "Empresa XYZ",
        date: "01/01/2024",
        batch: "LOTE9876"
    }
    // Puedes añadir más piezas aquí
};

// Ruta para obtener la información de la pieza
app.get('/get-piece-info', (req, res) => {
    const pieceCode = req.query.code;

    const pieceInfo = piecesDatabase[pieceCode];
    if (pieceInfo) {
        res.json(pieceInfo);
    } else {
        res.status(404).json({ error: "Pieza no encontrada" });
    }
});

// Inicia el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
