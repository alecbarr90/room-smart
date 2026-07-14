import { categories } from '../data/smartData';

export const searchTips = (searchTerm, categoryFilter = 'all') => {
  const normalizedSearchTerm = searchTerm.trim().toLowerCase();

  return categories
    .filter(category => categoryFilter === 'all' || category.id === categoryFilter)
    .flatMap(category =>
      category.tips
        .filter(tip => {
          if (!normalizedSearchTerm) return true;

          return [tip.title, tip.content].some(value =>
            value.toLowerCase().includes(normalizedSearchTerm)
          );
        })
        .map(tip => ({
          ...tip,
          categoryId: category.id,
          categoryTitle: category.title,
        }))
    );
};
