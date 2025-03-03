// interface/ICategory.ts
export interface Category {
    categoryId: number;
    parentId: number | null;
    categoryName: string;
  }