import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGoods = createAsyncThunk(
  'posts/getGoods',
  async (thunkAPI) => {
    const result = await fetch('http://localhost:3001/products').then(
    (data) => data.json()
  )
  return result;
})