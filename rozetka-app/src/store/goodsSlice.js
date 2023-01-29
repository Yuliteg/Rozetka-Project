import {createSlice} from '@reduxjs/toolkit';
import data from '../data/data.json';

export const goodsSlice = createSlice({
    name: 'goods',
    initialState: {
        goods: data,
        isError: false,
        isLoading: false,
        message: ''
    },
    reducers : {

    }
});

export const selectGoods = state => state.goods.goods;
export default goodsSlice.reducer;