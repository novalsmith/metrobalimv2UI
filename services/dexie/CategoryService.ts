// services/dexie/CategoryService.ts
import Dexie, { type Table } from 'dexie';
import { type ICategoryEntity } from '@/interfaces/ICategoryEntity';
import { type ICategoryService } from '@/interfaces/ICategoryService';

interface MyDatabase extends Dexie {
  categories: Table<ICategoryEntity>;
}

const db = new Dexie('CategoryDatabase') as MyDatabase;
db.version(1).stores({
  categories: 'categoryId, parentId, categoryName',
});

export const CategoryService: ICategoryService = {
  async getAllCategories(): Promise<ICategoryEntity[]> {
    try {
      return await db.categories.toArray();
    } catch (error) {
      console.error('Error getting all categories:', error);
      throw error;
    }
  },

  async addCategories(categories: ICategoryEntity[]): Promise<void> {
    try {
      await db.categories.bulkPut(categories);
    } catch (error) {
      console.error('Error adding categories:', error);
      throw error;
    }
  },
};