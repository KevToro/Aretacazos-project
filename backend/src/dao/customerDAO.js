import { supabase } from "../config/supabaseClient.js";

export class CustomerDAO {
    // Guardar un cliente nuevo en la base de datos
    static async create(customerData) {
        const {name, email, phone} = customerData;
        const {data, error} = await supabase
            .from('customers')
            .insert([{name, email, phone}])
            .select();
         
        if (error) throw error;
        return data[0];
    }

    // Obtener todos los clientes de la base de datos(listarlos)
    static async getAll() {
        const {data, error} = await supabase
            .from('customers')
            .select('*')
            .order('created_at', {ascending: false});
        if (error) throw error;
        return data;
    }
}