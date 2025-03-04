// repositories/CategoryRepository.ts
import { $fetch } from 'ofetch';
import { CategoryService } from '@/services/dexie/CategoryService';
import { CategoryModel } from '@/models/CategoryModel';
import { type ICategoryEntity } from '@/interfaces/ICategoryEntity';
import { type ICategoryRepository } from '@/interfaces/ICategoryRepository';

export const CategoryRepository: ICategoryRepository = {
  async getCategoriesFromApi(): Promise<CategoryModel[] | null> {
    try {
      const response = await $fetch<ICategoryEntity[]>('/api/categories');
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

  async saveCategoriesToDexie(categories: CategoryModel[]): Promise<void> {
    await CategoryService.addCategories(categories.map((model) => model as ICategoryEntity));
  },
};