import { createAsyncThunk } from '@reduxjs/toolkit'
import productAPI from '../../api/productApi'

export const getAllProduct = createAsyncThunk(
	'product/getAllProduct',
	async (params, { rejectWithValue }) => {
		try {
			return await productAPI.getAllProduct(params)
		} catch (error) {
			return rejectWithValue(error.response)
		}
	}
)

const initialState = {
	products: [],
	productsLoading: false,
	product: {},
	productLoading: false,
}

const productSlice = createSlice({
	name: 'product',
	initialState,
	reducers: {},
	extraReducers: {
		[getAllProduct.pending]: (state) => {
			state.productsLoading = true
		},
		[getAllProduct.fulfilled]: (state, action) => {
			state.productsLoading = false
			state.products = action.payload.products
		},
		[getProduct.pending]: (state) => {
			state.productLoading = true
		},
		[getProduct.fulfilled]: (state, action) => {
			state.productLoading = false
			state.product = action.payload.product
		},
	},
})



// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  products: [],
  loading: false,
  error: "",
  filteredProducts: [],
};

// export const getGoods = createAsyncThunk(
//   "products/getProducts",
//   async () => {
//     return await axios
//       .get("https://fakestoreapi.com/products")
//       .then((res) => res.data);
//   }
// );

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    /* filterProducts: (state, action) => {
      state.filteredProducts = state.products.filter(
        (item) => item.category === action.payload
      );
    }, */
    filterProducts: (state, action) => {
      state.filteredProducts =
        action.payload === "all"
          ? state.products
          : state.products.filter((item) => item.category === action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});