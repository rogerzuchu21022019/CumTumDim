import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Banner, DataResponse} from './types';
import {constants} from '../../app/shared/constants';

const endPointBanners = 'banners';
const endPointAdd = 'add-banner';
export const bannersApi = createApi({
  reducerPath: 'bannersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${constants.BASE_URL.MAIN}/products/`,
  }),
  endpoints: builder => ({
    listBanner: builder.query<DataResponse<Banner>, void>({
      query: () => `${endPointBanners}`,
    }),
    addBanner: builder.mutation<Banner, Omit<Banner, '_id'>>({
      query: item => {
        const formData = new FormData();
        formData.append('file', {
          uri: item.imageUrl,
          type: 'image/jpeg',
          name: 'image.jpg',
        });
        return {
          url: `${endPointAdd}`,
          method: 'POST',
          body: formData,
        };
      },
    }),
  }),
});

export const {useListBannerQuery, useAddBannerMutation} = bannersApi;
