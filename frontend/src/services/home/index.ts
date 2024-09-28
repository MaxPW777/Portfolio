import { useQuery } from 'react-query';
import { getHomeItems } from '@/services/home/routes';

export const useGetHomeItemsQuery = () => {
  return useQuery('homeItems', getHomeItems);
}
