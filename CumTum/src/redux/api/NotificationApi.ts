import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Notification} from './types';
import {constants} from '../../app/shared/constants';

interface ListResponse<T> {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: T[];
}

export const NotificationApi = createApi({
  baseQuery: fetchBaseQuery({baseUrl: `${constants.BASE_URL.MAIN}/`}),
  endpoints: builder => ({
    listNotification: builder.query<ListResponse<Notification>, number | void>({
      query: (page = 1) => `posts?page=${page}`,
    }),
  }),
});

export const {useListNotificationQuery} = NotificationApi;
