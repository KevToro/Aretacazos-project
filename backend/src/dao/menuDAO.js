import { supabase } from "../config/supabaseClient.js";

export class MenuDAO {

    static async getActiveMenu() {

        const { data: categories, error: catError } = await supabase
            .from("categories")
            .select("*")
            .eq("is_active", true)
            .order("display_order", { ascending: true });

        if (catError) throw catError;


        const { data: products, error: prodError } = await supabase
            .from("products")
            .select("*")
            .eq("is_available", true);

        if (prodError) throw prodError;


        const { data: variants, error: variantError } = await supabase
            .from("product_variants")
            .select("*");

        if (variantError) throw variantError;


        return categories.map(category => ({

            ...category,

            products: products
                .filter(product => product.category_id === category.id)
                .map(product => ({

                    ...product,

                    product_variants: variants.filter(
                        variant => variant.product_id === product.id
                    )

                }))

        }));

    }

}