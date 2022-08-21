import { Product } from '../models';

const paginate = (items: Product[]) => {
  const itemsPerPage = 4;
  const pages = Math.ceil(items.length / itemsPerPage);

  const newItems = Array.from({ length: pages }, (_, index) => {
    const start = index * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  });
  return newItems;
};

export default paginate;
