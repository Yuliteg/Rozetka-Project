import {configureStore} from '@reduxjs/toolkit';
import goodsSlice from './slices/goodsSlice';


export const store = configureStore(({
    reducer: {
        goods: goodsSlice
    },
}))
