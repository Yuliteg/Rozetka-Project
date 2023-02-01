import {configureStore} from '@reduxjs/toolkit';
import filterSlice from './slices/filtersGoodsSlice';
import { goodsApi } from './slices/apiGoodsSlice';


export const store = configureStore(({
    reducer: {
        product: filterSlice,
        [goodsApi.reducerPath]: goodsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(goodsApi.middleware),
}))
