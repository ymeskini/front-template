import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, Dependencies, RootState } from './createStore';

export const createThunk = createAsyncThunk.withTypes<{
  state: RootState;
  dispatch: AppDispatch;
  extra: Dependencies;
}>();
