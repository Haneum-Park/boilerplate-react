import { createSlice } from '@reduxjs/toolkit';

type SampleState = {
  count: number;
};

const initialState: SampleState = {
  count: 0,
};

const sampleSlice = createSlice({
  name: 'sample',
  initialState,
  reducers: {},
});

export default sampleSlice;
