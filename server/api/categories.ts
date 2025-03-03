// server/api/categories.ts
import { $fetch } from 'ofetch';
import { useRuntimeConfig } from '#imports';

interface Category {
  categoryId: number;
  parentId: number | null;
  categoryName: string;
}

export default defineEventHandler(async () => {
  try {
    const config = useRuntimeConfig();
    const apiUrl = config.public.apiBaseUrl;
    const response = await $fetch<{ data: Category[] }>(`${apiUrl}/category`);
    return response.data;
  } catch (err: any) {
    console.error('Failed to fetch categories from external API:', err);
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch categories from external API',
    });
  }
});