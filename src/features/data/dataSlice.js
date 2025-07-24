import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `User ${i + 1}`,
    email: `user${i + 1}@example.com`,
  })),
};

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
});

export default dataSlice.reducer;