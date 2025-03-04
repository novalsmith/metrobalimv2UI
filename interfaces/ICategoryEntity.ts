// interface/ICategoryEntity.ts
export interface ICategoryEntity {
    categoryId: number;
    parentId: number | null;
    categoryName: string;
  }