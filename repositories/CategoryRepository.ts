// repositories/CategoryRepository.ts
import { $fetch } from 'ofetch';
import { CategoryService } from '@/services/dexie/CategoryService';
import { type Category } from '@/interfaces/ICategory';
import { CategoryModel } from '@/models/CategoryModel'; // Import model

export const CategoryRepository = {
  async getCategoriesFromApi(): Promise<CategoryModel[] | null> {
    try {
      const response = await $fetch<Category[]>('/api/categories');
      if (!response) return null;
      return response.map((category) => new CategoryModel(category));
    } catch (err: any) {
      console.error('Failed to fetch categories from Nuxt API:', err);
      return null;
    }
  },

  async getCategoriesFromDexie(): Promise<CategoryModel[]> {
    const categories = await CategoryService.getAllCategories();
    return categories.map((category) => new CategoryModel(category));
  },

  async saveCategoriesToDexie(categories: Category[]): Promise<void> {
    await CategoryService.addCategories(categories);
  },
};