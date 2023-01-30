import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import data from '../data/data.json';
import goodService from './services/goodServices';

export const getGoods = createAsyncThunk('GET_GOODS', async (_, thunkAPI) => {
    try {
     return await goodService.getGoods();
    } catch (error) {
     return thunkAPI.rejectWithValue(error.response.data) 
    }
});

export const goodsSlice = createSlice({
    name: 'goods',
    initialState: {
        goods: null,
        isError: false,
        isLoading: false,
        message: ''
    },
    extraReducers : (builder) => {
      builder.addCase(getGoods.pending, (state)=> {
        state.isLoading = true;
      });
      builder.addCase(getGoods.fulfilled, (state, action)=> {
        state.isLoading = false;
        state.goods = action.payload;
      });
      builder.addCase(getGoods.rejected, (state, action)=> {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload.message;
        state.goods = null;
      });
    }
});

// export const selectGoods = state => state.goods.goods;
export default goodsSlice.reducer;