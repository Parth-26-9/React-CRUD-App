import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://64eee747219b3e2873c3987b.mockapi.io/crud",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

// Read Action
// This thing will return promise so we'll handle it downward
export const previewUser = createAsyncThunk(
  "previewUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://64eee747219b3e2873c3987b.mockapi.io/crud"
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Delete Action

export const deleteUser = createAsyncThunk(
  "previewUser",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://64eee747219b3e2873c3987b.mockapi.io/crud/${id}`,
      { method: "DELETE" }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//update User

export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      `https://64eee747219b3e2873c3987b.mockapi.io/crud/${data.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error.response);
    }
  }
);

// Filter Data

export const userDetail = createSlice({
  name: "userDetails",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [createUser.pending]: (state) => {
      state.loading = true;
    },
    [createUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    },
    [createUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [previewUser.pending]: (state) => {
      state.loading = true;
    },
    [previewUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [previewUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [deleteUser.pending]: (state) => {
      state.loading = true;
    },
    [deleteUser.fulfilled]: (state, action) => {
      state.loading = false;
      const { id } = action.payload;
      if (id) {
        state.users = state.users.filter((ele) => ele.id !== id);
      }
    },
    [deleteUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [updateUser.pending]: (state) => {
      state.loading = true;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = state.users.map((ele) =>
        ele.id === action.payload.id ? action.payload : ele
      );
    },
    [updateUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export default userDetail.reducer;
