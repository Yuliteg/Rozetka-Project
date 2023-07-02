import { createAsyncThunk } from "@reduxjs/toolkit";

export const getGoods = createAsyncThunk(
  'posts/getGoods',
  async (thunkAPI) => {
    const result = await fetch('http://localhost:3001/products').then(
    (data) => data.json()
  )
  return result;
})