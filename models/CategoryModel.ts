// models/CategoryModel.ts
import { type Category } from '@/interfaces/ICategory';

export class CategoryModel implements Category {
  categoryId: number;
  parentId: number | null;
  categoryName: string;
  // Tambahkan properti lain yang ingin Anda ekspos

  constructor(category: Category) {
    this.categoryId = category.categoryId;
    this.parentId = category.parentId;
    this.categoryName = category.categoryName;
    // Tambahkan properti lain yang ingin Anda ekspos
  }

  // Tambahkan metode untuk transformasi data jika diperlukan
  getFormattedCategoryName(): string {
    return this.categoryName.toUpperCase();
  }
}