// plugins/article.js
 import { useRouter } from 'vue-router';

export default defineNuxtPlugin(() => {
  const router = useRouter();

  const openArticle = (article: { category: { parentId: any; categoryId: any; }; slug: any; }) => {
    let url = "/";
    if(article.category.parentId){
      url += article.category.parentId+"/";
    }

    url += article.category.categoryId+'/'+article.slug;

    router.push(url);
  };

  return {
    provide: {
      openArticle: openArticle,
    },
  };
});