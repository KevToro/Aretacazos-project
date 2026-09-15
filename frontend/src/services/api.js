const API_URL = import.meta.env.VITE_API_URL;

export const getMenu = async () => {
  try {
    const response = await fetch(`${API_URL}/menu`);

    if (!response.ok) {
      throw new Error("Error al obtener el menú");
    }

    const result = await response.json();

    return result.data;

  } catch (error) {
    console.error("Error obteniendo el menú:", error);
    throw error;
  }
};