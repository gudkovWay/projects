import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export enum SortType {
  RATING_ASC = 'rating',
  RATING_DESC = '-rating',
  TITLE_ASC = 'title',
  TITLE_DESC = '-title', 
  PRICE_ASC = 'price',
  PRICE_DESC = '-price', 
}

type Sort = {
  name: string;
  sortProperty: SortType
}

interface FilterSliceState {
  categoryId: number;
  currentPage: number;
  sort: Sort
}

const initialState: FilterSliceState = {
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: 'популярности',
    sortProperty: SortType.RATING_ASC,
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setFilters(state, action: PayloadAction<FilterSliceState>) {
      state.sort = action.payload.sort;
      state.currentPage = Number(action.payload.currentPage);
      state.categoryId = Number(action.payload.categoryId);
    },
  },
});

export const selectFilter = (state: RootState) => state.filter;
export const selectSort = (state: RootState) => state.filter.sort;

export const { setCategoryId, setSort, setFilters } = filterSlice.actions;

export default filterSlice.reducer;
