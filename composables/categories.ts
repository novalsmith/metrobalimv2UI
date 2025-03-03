// composables/categories.ts
import { $fetch } from 'ofetch';
import { useRuntimeConfig } from '#imports';

export const useGroupedCategories = async () => {
 
  try {
    const config = useRuntimeConfig();
    const apiUrl = config.public.apiBaseUrl;
     const response = await $fetch<{ data: any[] }>(`${apiUrl}/category`);
    const categories = response.data;

    const parents = categories.filter((category) => category.parentId === null);

    const groupedCategories = parents.map((parent) => ({
      ...parent,
      subcategories: categories.filter(
        (category) => category.parentId === parent.categoryId
      ),
    }));
     
    return { groupedCategories }; // Kembalikan isLoading
  } catch (error) {
    console.error('Gagal mengambil data kategori:', error);
     return { groupedCategories: null }; // Kembalikan isLoading
  }
};