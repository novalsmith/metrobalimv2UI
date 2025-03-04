// composables/Categories.ts
import { ref, onMounted } from 'vue';
import { CategoryRepository } from '@/repositories/CategoryRepository';
import { CategoryModel } from '@/models/CategoryModel';

export const useCategoriesDexie = () => {
  const categories = ref<CategoryModel[]>([]);
  const groupedCategories = ref<any[] | null>(null);
  const error = ref<Error | null>(null);
  const loading = ref(false);

  const groupCategories = (categories: CategoryModel[]): any[] | null => {
    if (!categories) return null;

    try {
      const parents = categories.filter((category) => category.parentId === null);

      return parents.map((parent) => ({
        ...parent,
        subcategories: categories.filter(
          (category) => category.parentId === parent.categoryId
        ),
      }));
    } catch (err: any) {
      console.error('Failed to group categories:', err);
      error.value = err;
      return null;
    }
  };

  const loadCategories = async () => {
    loading.value = true;
    error.value = null;
    try {
      const localCategories = await CategoryRepository.getCategoriesFromDexie();
      if (localCategories.length > 0) {
        console.log('Categories loaded from Dexie.');
        categories.value = localCategories;
      } else {
        console.log('Categories loaded from API.');
        const apiCategories = await CategoryRepository.getCategoriesFromApi();
        if (apiCategories) {
          await CategoryRepository.saveCategoriesToDexie(apiCategories.map((model) => model as CategoryModel));
          categories.value = apiCategories;
        }
      }
      groupedCategories.value = groupCategories(categories.value);
    } catch (err: any) {
      console.error('Failed to load categories:', err);
      error.value = err;
    } finally {
      loading.value = false;
    }
  };

  onMounted(async () => {
    await loadCategories();
  });

  return { categories, groupedCategories, error, loading };
};