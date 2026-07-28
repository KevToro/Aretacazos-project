import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import customerRoutes from './routes/customerRoutes.js';
import menuRoutes from './routes/menuRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Permite peticiones desde el Frontend
app.use(express.json()); // Permite a Express entender JSON en el body de las peticiones

//Rutas de la API
app.use('/api/customers', customerRoutes);
app.use('/api/menu', menuRoutes);   

// Ruta de prueba para verificar que el servidor está corriendo
app.get('/health', (req, res) => {
    res.json({status: 'ok', message: 'Servidor de ARETACAZOS activo y corriendo'});
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});