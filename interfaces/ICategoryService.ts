// interfaces/ICategoryService.ts
import { type ICategoryEntity } from '@/interfaces/ICategoryEntity';

export interface ICategoryService {
  getAllCategories(): Promise<ICategoryEntity[]>;
  addCategories(categories: ICategoryEntity[]): Promise<void>;
}