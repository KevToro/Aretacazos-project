import {supabase} from '../config/supabaseClient.js';

export class MenuDAO {
    //Obtener categorías activas con sus respectivos productos
    static async getActiveMenu() {
        const {data: categories, error: catError } = await supabase
        .from('categories')
        .select('*')
        .eq('is_active', true)
        .order('display_order', {ascending: true});

        if (catError) throw catError;

        const {data: products, error: prodError } = await supabase
        .from('products')
        .select('*')
        .eq('is_available', true)

        if (prodError) throw prodError;

        // Agrupamos los productos dentro de cada categoría
        return categories.map(category => ({
            ...category,
            products: products.filter(product => product.category_id === category.id)
        }))};
    }
