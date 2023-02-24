import {configureStore} from '@reduxjs/toolkit';
import filterSlice from './slices/goodsSlice';

export const store = configureStore(({
    reducer: {
        product: filterSlice,
    },
}))