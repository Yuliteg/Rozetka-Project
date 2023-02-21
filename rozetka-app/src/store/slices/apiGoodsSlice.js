import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const goodsApi = createApi({
   reducerPath: "goodsApi",
   baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/"}),
   endpoints: builder => ({
      getProducts: builder.query({
         query: () => "products"
      }),
   }),
});

export const { useGetProductsQuery } = goodsApi;
