import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGoods = createAsyncThunk(
  'posts/getGoods',
  async (thunkAPI) => {
    const result = await fetch('https://github-repo-rozetka.onrender.com/products').then(
    (data) => data.json()
  )
  return result;
})