// models/CategoryModel.ts
import { type ICategoryEntity } from '@/interfaces/ICategoryEntity'; // Perbaikan import

export class CategoryModel implements ICategoryEntity {
  categoryId: number;
  parentId: number | null;
  categoryName: string;
  // Tambahkan properti lain yang ingin Anda ekspos

  constructor(category: ICategoryEntity) {
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