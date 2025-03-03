// services/dexie/CategoryService.ts
import Dexie, { type Table } from 'dexie';
import { type Category } from '@/interfaces/ICategory'; // Import interface

interface MyDatabase extends Dexie {
  categories: Table<Category>;
}

const db = new Dexie('CategoryDatabase') as MyDatabase;
db.version(1).stores({
  categories: 'categoryId, parentId, categoryName',
});

export const CategoryService = {
  async getAllCategories(): Promise<Category[]> {
    try {
      return await db.categories.toArray();
    } catch (error) {
      console.error('Error getting all categories:', error);
      throw error;
    }
  },

  async addCategories(categories: Category[]): Promise<void> {
    try {
      await db.categories.bulkPut(categories);
    } catch (error) {
      console.error('Error adding categories:', error);
      throw error;
    }
  },
};