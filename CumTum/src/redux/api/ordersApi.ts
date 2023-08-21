import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Category, DataResponse, Order} from './types';
import {constants} from '../../app/shared/constants';
import {isToday} from 'date-fns';

const endPoint = 'find-orders';
export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${constants.BASE_URL.MAIN}/products/`,
  }),
  endpoints: builder => ({
    listOrder: builder.query<DataResponse<Order>, void>({
      query: () => `${endPoint}`,
      transformResponse: (response: DataResponse<Order>) => {
        console.log(
          '🚀 ~ file: ordersApi.ts:15 ~ response:',
          response.data.length,
        );
        return {
          ...response,
        };
      },
    }),
    listOrderSortToday: builder.query<DataResponse<Order>, void>({
      query: () => `${endPoint}`,
      transformResponse: (response: DataResponse<Order>) => {
        const listDataSortToday = response.data.filter(item =>
          isToday(new Date(item.createdAt)),
        );
        return {
          ...response,
          data: listDataSortToday,
        };
      },
    }),
  }),
});

export const {useListOrderQuery, useListOrderSortTodayQuery} = ordersApi;
