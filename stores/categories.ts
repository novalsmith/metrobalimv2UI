// stores/categories.ts
import { defineStore } from 'pinia';
import { CategoryModel } from '@/models/CategoryModel';
import { type ICategoryEntity } from '@/interfaces/ICategoryEntity';

export const useCategoryStore = defineStore('categories', {
  state: () => ({
    categories: [] as CategoryModel[],
    selectedCategory: null as CategoryModel | null,
  }),
  actions: {
    setCategories(categories: ICategoryEntity[]) {
      this.categories = categories.map((category) => new CategoryModel(category));
    },
    setSelectedCategory(category: CategoryModel | null) {
      this.selectedCategory = category;
    },
  },
  getters: {
    categoryCount: (state) => state.categories.length,
    selectedCategoryName: (state) => state.selectedCategory?.categoryName || 'No Category Selected',
  },
});