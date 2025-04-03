import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

export const fetchImages = createAsyncThunk("unsplash/fetchImages", async (query = "") => {
  if (!query) {
    const response = await axios.get(
      `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}&count=20`
    );
    return response.data;
  }
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=${ACCESS_KEY}&query=${query}&per_page=20`
  );
  return response.data.results; 
});

const unsplashSlice = createSlice({
  name: "unsplash",
  initialState: {
    images: [],
    loading: false,
    error: null,
  },
  reducers: {
    setImages: (state, action) => {
      state.images = action.payload;
    },
    clearImages: (state) => {
      state.images = [];
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchImages.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchImages.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload;
      })
      .addCase(fetchImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default unsplashSlice.reducer;