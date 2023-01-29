import {configureStore} from '@reduxjs/toolkit';
// import goodsReducer from './goodsSlice';
import goodsSlice from './goodsSlice';


export const store = configureStore(({
    reducer: {
        goods: goodsSlice
    },
}))
