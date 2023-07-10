import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Banner, DataResponse} from './types';
import {constants} from '../../app/shared/constants';

const endPointBanners = 'banners';
const endPointAdd = 'add-banner';
const endPointDelete = 'delete-banner';
const endPointUpdate = 'update-banner-by-id';

export enum BannerEnum {
  IMAGE_URL = 'imageUrl',
  _ID = '_id',
  NAME = 'name',
}

export const bannersApi = createApi({
  reducerPath: 'bannersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${constants.BASE_URL.MAIN}/products/`,
  }),
  tagTypes: ['Banner'],
  endpoints: builder => ({
    listBanner: builder.query<DataResponse<Banner>, void>({
      query: () => `${endPointBanners}`,
      providesTags: ['Banner'],
    }),
    addBanner: builder.mutation<DataResponse<Banner>, Omit<Banner, '_id'>>({
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
      invalidatesTags: ['Banner'],
      onQueryStarted: async (_, {dispatch, queryFulfilled}) => {
        try {
          // Wait for the mutation to be fulfilled
          await queryFulfilled;

          // Fetch the updated list of banners after adding a new item
          await dispatch(
            bannersApi.endpoints.listBanner.initiate(undefined, {
              forceRefetch: true,
            }),
          );
        } catch (error) {
          console.error('Error occurred while fetching banners:', error);
        }
      },
    }),
    deleteBanner: builder.mutation<DataResponse<Banner>, Partial<Banner>>({
      query: item => ({
        url: `${endPointDelete}/${item._id}`,
        method: 'POST',
      }),
      invalidatesTags: ['Banner'],
      onQueryStarted: async (_, {dispatch, queryFulfilled}) => {
        try {
          await queryFulfilled;

          await dispatch(
            bannersApi.endpoints.listBanner.initiate(undefined, {
              forceRefetch: true,
            }),
          );
        } catch (error) {
          console.error('Error occurred while fetching banners:', error);
        }
      },
    }),
    updateBanner: builder.mutation<
      DataResponse<Banner>,
      Pick<Banner, BannerEnum.IMAGE_URL | BannerEnum._ID>
    >({
      query: itemBanner => {
        const formData = new FormData();
        formData.append('file', {
          uri: itemBanner.imageUrl,
          type: 'image/jpeg',
          name: 'image.jpg',
        });
        return {
          url: `${endPointUpdate}/${itemBanner._id}`,
          method: 'POST',
          body: formData,
        };
      },
      invalidatesTags: ['Banner'],
      onQueryStarted: async (_, {dispatch, queryFulfilled}) => {
        try {
          await queryFulfilled;

          await dispatch(
            bannersApi.endpoints.listBanner.initiate(undefined, {
              forceRefetch: true,
            }),
          );
        } catch (error) {
          console.error('Error occurred while fetching banners:', error);
        }
      },
    }),
    // BannerEnum.ImageUrl là trường muốn pick để update của Banner Object. Tỏ chức theo enum cho dễ lấy và dễ hiểu
  }),
});

export const {
  useListBannerQuery,
  useAddBannerMutation,
  useUpdateBannerMutation,
  useDeleteBannerMutation,
} = bannersApi;
