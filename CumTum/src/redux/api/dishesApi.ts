import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Category, DataResponse, Dish} from './types';
import {constants} from '../../app/shared/constants';

const endPoint = 'dishes';
export const dishesApi = createApi({
  reducerPath: 'dishesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${constants.BASE_URL.MAIN}/products/`,
  }),
  endpoints: builder => ({
    listDish: builder.query<DataResponse<Dish>, void>({
      query: () => `${endPoint}`,
    }),
  }),
});

export const {useListDishQuery} = dishesApi;
