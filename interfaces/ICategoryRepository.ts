// interfaces/ICategoryRepository.ts
import { CategoryModel } from '@/models/CategoryModel';

export interface ICategoryRepository {
  getCategoriesFromApi(): Promise<CategoryModel[] | null>;
  getCategoriesFromDexie(): Promise<CategoryModel[]>;
  saveCategoriesToDexie(categories: CategoryModel[]): Promise<void>;
}