import {CustomerDAO} from '../dao/customerDAO.js'

export const registerCustomer = async (req, res) => {
    try {
        const {name, email, phone} = req.body;
        // validacion previa
        if (!name || !email ) {
            return res.status(400).json({error: 'Nombre y correo son obligatorios'});
        }
        const newCustomer = await customerDAO.create({name, email, phone});
        return res.status(201).json({message: 'Cliente registrado exitosamente', data: newCustomer});
    } catch (error) {
        // Código de error 23505 en Postgres significa correo duplicado
        if (error.code === '23505') {
            return res.status(409).json({error: 'El correo ya está registrado'});
        }
        return res.status(500).json({error: 'Error en el servidor ', details: error.message});
    }
};

export const getCustomers = async (req, res) => {
    try {
        const customers = await customerDAO.getAll();
        return res.status(200).json(customers);
    } catch (error) {
        return res.status(500).json({error: 'Error al consultar clientes', details: error.message});
    }
};

    

