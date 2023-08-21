import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Category, DataResponse} from './types';
import {constants} from '../../app/shared/constants';

const endPoint = 'categories';
export const categoriesApi = createApi({
  reducerPath: 'categoriesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${constants.BASE_URL.MAIN}/products/`,
  }),
  endpoints: builder => ({
    listCategory: builder.query<DataResponse<Category>, void>({
      query: () => `${endPoint}`,
    }),
  }),
});

export const {useListCategoryQuery} = categoriesApi;
