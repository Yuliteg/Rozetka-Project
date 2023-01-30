import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axious from "axios";

export const getGoods = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
      const response = await axious.get(
        "http://localhost:3001/products"
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  goods: null,
  isError: false,
  isLoading: false,
  message: '',
}

export const goodsSlice = createSlice({
  name: 'goods',
  initialState,
  reducers: {},
  extraReducers: {
    [getGoods.pending]: (state) => {
      state.isLoading = true;
    },
    [getGoods.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.goods = action.payload;
    },
    [getGoods.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.message;
      state.goods = null;
    },
  },
})

export default goodsSlice.reducer;
