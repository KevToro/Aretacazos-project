import {MenuDAO} from '../dao/menuDAO.js'

export const getMenu = async (req, res) => {
    try {
        const menu = await MenuDAO.getActiveMenu();
        return res.status(200).json({data: menu});
    } catch (error) {
        return res.status(500).json({error: 'Error al consultar el menú', details: error.message});
    }
}